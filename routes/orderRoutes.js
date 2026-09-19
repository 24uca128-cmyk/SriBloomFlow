const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/Order');
const Notification = require('../models/Notification');

// @route   POST /api/orders
// @desc    Create a new flower order
// @access  Public
router.post('/', async (req, res) => {
    try {
        const {
            orderNumber,
            customerName,
            customerEmail,
            customerPhone,
            deliveryAddress,
            items,
            totalAmount,
            deliveryFee,
            discount,
            grandTotal,
            paymentMethod,
            paymentStatus,
            deliverySlot,
            orderNotes,
            trackingId
        } = req.body;

        if (!customerName || !customerPhone || !items || !items.length) {
            return res.status(400).json({
                success: false,
                message: 'Customer name, phone number, and items are required to place an order.'
            });
        }

        const calculatedGrandTotal = grandTotal || (Number(totalAmount || 0) + Number(deliveryFee || 0) - Number(discount || 0));

        const orderData = {
            customerName,
            customerEmail: customerEmail || 'guest@bloomflow.com',
            customerPhone,
            deliveryAddress: deliveryAddress || {},
            items,
            totalAmount: Number(totalAmount) || 0,
            deliveryFee: Number(deliveryFee) || 0,
            discount: Number(discount) || 0,
            grandTotal: calculatedGrandTotal,
            paymentMethod: paymentMethod || 'COD',
            paymentStatus: paymentStatus || 'Pending',
            orderStatus: 'Pending',
            deliverySlot: deliverySlot || 'Morning (6 AM - 9 AM)',
            orderNotes: orderNotes || ''
        };
        if (orderNumber) orderData.orderNumber = orderNumber;
        if (trackingId) orderData.trackingId = trackingId;

        const order = await Order.create(orderData);

        // Dispatches Notifications to both Admin and Customer
        try {
            // 1. Admin Notification
            await Notification.create({
                recipientType: 'admin',
                type: 'order_placed',
                title: 'New Order Received',
                message: `Order #${order.orderNumber} (Tracking: ${order.trackingId}) placed by ${order.customerName} for ₹${Number(order.grandTotal).toLocaleString('en-IN')}.`,
                orderId: order.orderNumber,
                trackingId: order.trackingId,
                amount: order.grandTotal
            });

            // 2. Customer Notification
            if (order.customerEmail) {
                await Notification.create({
                    recipientType: 'user',
                    recipientEmail: order.customerEmail.toLowerCase().trim(),
                    type: 'order_placed',
                    title: 'Order Placed Successfully! 🌸',
                    message: `Your order #${order.orderNumber} (Tracking: ${order.trackingId}) has been confirmed! We are preparing your fresh blooms.`,
                    orderId: order.orderNumber,
                    trackingId: order.trackingId,
                    amount: order.grandTotal
                });
            }
        } catch (notifErr) {
            console.warn('Failed to dispatch order placement notification:', notifErr.message);
        }

        res.status(201).json({
            success: true,
            message: 'Order placed successfully in BloomFlow!',
            data: order
        });
    } catch (err) {
        console.error('Create Order Error:', err);
        res.status(500).json({
            success: false,
            message: err.message || 'Failed to create order.'
        });
    }
});

// @route   GET /api/orders/my-orders
// @desc    Get orders for specific customer email
// @access  Public
router.get('/my-orders', async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Please provide customer email.'
            });
        }

        const orders = await Order.find({ customerEmail: email.toLowerCase().trim() }).sort({ createdAt: -1 });

        res.json({
            success: true,
            count: orders.length,
            data: orders
        });
    } catch (err) {
        console.error('My Orders Error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve order history.'
        });
    }
});

// @route   GET /api/orders
// @desc    Get all orders (Admin console)
// @access  Public/Admin
router.get('/', async (req, res) => {
    try {
        const { status, limit } = req.query;
        let query = {};
        if (status && status !== 'all') {
            query.orderStatus = new RegExp('^' + status + '$', 'i');
        }

        const orders = await Order.find(query)
            .sort({ createdAt: -1 })
            .limit(limit ? Number(limit) : 100);

        res.json({
            success: true,
            count: orders.length,
            data: orders
        });
    } catch (err) {
        console.error('Get All Orders Error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve orders.'
        });
    }
});

// @route   GET /api/orders/:id
// @desc    Get single order by ID or orderNumber
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let order;

        if (id.startsWith('TRK-')) {
            order = await Order.findOne({ trackingId: id });
        } else if (id.startsWith('BF-')) {
            order = await Order.findOne({ $or: [{ orderNumber: id }, { trackingId: id }] });
        } else if (id.match(/^[0-9a-fA-F]{24}$/)) {
            order = await Order.findById(id);
        } else {
            order = await Order.findOne({ $or: [{ orderNumber: id }, { trackingId: id }] });
        }

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found.'
            });
        }

        res.json({
            success: true,
            data: order
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error fetching order.'
        });
    }
});

// @route   PUT /api/orders/:id/status
// @desc    Update order status
// @access  Public/Admin
router.put('/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { orderStatus, paymentStatus } = req.body;

        let query = id.startsWith('TRK-')
            ? { trackingId: id }
            : (id.startsWith('BF-') ? { $or: [{ orderNumber: id }, { trackingId: id }] } : { _id: id });

        const order = await Order.findOne(query);
        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found to update.'
            });
        }

        if (orderStatus) order.orderStatus = orderStatus;
        if (paymentStatus) order.paymentStatus = paymentStatus;

        // If updated to Cancelled, check if refund is needed
        if (orderStatus === 'Cancelled') {
            const isOnlinePaid = ['UPI', 'CARD', 'NETBANKING'].includes(order.paymentMethod) || order.paymentStatus === 'Completed';
            if (isOnlinePaid && !order.refundDetails?.refundId) {
                const refundId = 'REF-' + Date.now().toString().slice(-6) + Math.floor(100 + Math.random() * 900);
                order.paymentStatus = 'Refunded';
                order.refundDetails = {
                    refundId: refundId,
                    amount: order.grandTotal || order.totalAmount,
                    status: 'Processed',
                    refundedAt: new Date(),
                    refundMethod: order.paymentMethod
                };
            }
        }

        await order.save();

        // Dispatch notifications on status change
        try {
            if (order.customerEmail) {
                const isCancelled = (order.orderStatus === 'Cancelled');
                await Notification.create({
                    recipientType: 'user',
                    recipientEmail: order.customerEmail.toLowerCase().trim(),
                    type: isCancelled ? 'order_cancelled' : 'order_status',
                    title: isCancelled ? 'Order Cancelled' : `Order ${order.orderStatus}`,
                    message: isCancelled
                        ? `Your order #${order.orderNumber} has been marked as Cancelled.${order.paymentStatus === 'Refunded' ? ` Instant refund of ₹${order.grandTotal} processed (Ref: ${order.refundDetails?.refundId}).` : ''}`
                        : `Your order #${order.orderNumber} status is now "${order.orderStatus}".`,
                    orderId: order.orderNumber,
                    trackingId: order.trackingId,
                    amount: order.grandTotal
                });
            }

            if (order.orderStatus === 'Cancelled') {
                await Notification.create({
                    recipientType: 'admin',
                    type: 'order_cancelled',
                    title: 'Order Cancelled by Admin',
                    message: `Order #${order.orderNumber} was marked as Cancelled.`,
                    orderId: order.orderNumber,
                    trackingId: order.trackingId,
                    amount: order.grandTotal
                });
            }
        } catch (notifErr) {
            console.warn('Failed to dispatch status notification:', notifErr.message);
        }

        res.json({
            success: true,
            message: 'Order status updated successfully!',
            data: order
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update order status.'
        });
    }
});

// @route   POST /api/orders/:id/cancel
// @desc    Cancel order and auto-process instant refund for online payments
// @access  Public
router.post('/:id/cancel', async (req, res) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;
        let query;
        if (id.startsWith('TRK-')) {
            query = { trackingId: id };
        } else if (id.startsWith('BF-')) {
            query = { $or: [{ orderNumber: id }, { trackingId: id }] };
        } else if (mongoose.Types.ObjectId.isValid(id)) {
            query = { $or: [{ _id: id }, { orderNumber: id }, { trackingId: id }] };
        } else {
            query = { $or: [{ orderNumber: id }, { trackingId: id }] };
        }

        const order = await Order.findOne(query);
        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found.'
            });
        }

        if (order.orderStatus === 'Cancelled') {
            return res.status(400).json({
                success: false,
                message: 'This order is already cancelled.'
            });
        }

        order.orderStatus = 'Cancelled';

        // Check if online payment needs instant refund
        const isOnlinePaid = ['UPI', 'CARD', 'NETBANKING'].includes(order.paymentMethod) || order.paymentStatus === 'Completed';

        if (isOnlinePaid) {
            const refundId = 'REF-' + Date.now().toString().slice(-6) + Math.floor(100 + Math.random() * 900);
            order.paymentStatus = 'Refunded';
            order.refundDetails = {
                refundId: refundId,
                amount: order.grandTotal || order.totalAmount,
                status: 'Processed',
                refundedAt: new Date(),
                refundMethod: order.paymentMethod
            };
        } else {
            order.paymentStatus = 'Cancelled';
        }

        if (reason) {
            order.orderNotes = (order.orderNotes ? order.orderNotes + ' | ' : '') + `Cancelled: ${reason}`;
        }

        await order.save();

        // Dispatch notifications for cancellation
        try {
            // 1. Admin Notification
            await Notification.create({
                recipientType: 'admin',
                type: 'order_cancelled',
                title: 'Order Cancelled',
                message: `Order #${order.orderNumber} (Tracking: ${order.trackingId}) was cancelled by ${order.customerName}.${isOnlinePaid ? ` Instant refund of ₹${order.grandTotal || order.totalAmount} was processed.` : ''}`,
                orderId: order.orderNumber,
                trackingId: order.trackingId,
                amount: order.grandTotal || order.totalAmount
            });

            // 2. Customer Notification
            if (order.customerEmail) {
                await Notification.create({
                    recipientType: 'user',
                    recipientEmail: order.customerEmail.toLowerCase().trim(),
                    type: 'order_cancelled',
                    title: isOnlinePaid ? 'Order Cancelled & Refund Processed' : 'Order Cancelled Successfully',
                    message: isOnlinePaid
                        ? `Your order #${order.orderNumber} was cancelled. Instant refund of ₹${order.grandTotal || order.totalAmount} processed to your original payment method (Ref: ${order.refundDetails?.refundId}).`
                        : `Your order #${order.orderNumber} has been cancelled successfully. No payment was charged.`,
                    orderId: order.orderNumber,
                    trackingId: order.trackingId,
                    amount: order.grandTotal || order.totalAmount
                });
            }
        } catch (notifErr) {
            console.warn('Failed to dispatch cancel notification:', notifErr.message);
        }

        res.json({
            success: true,
            message: isOnlinePaid
                ? `Order cancelled successfully! Instant refund of ₹${order.grandTotal || order.totalAmount} processed to your original payment method (Ref: ${order.refundDetails?.refundId}).`
                : 'Order cancelled successfully.',
            data: order
        });
    } catch (err) {
        console.error('Cancel Order Error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to cancel order.'
        });
    }
});

// @route   DELETE /api/orders/:id
// @desc    Delete order
// @access  Public/Admin
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let query = id.startsWith('BF-') ? { orderNumber: id } : { _id: id };

        const order = await Order.findOneAndDelete(query);
        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found to delete.'
            });
        }

        res.json({
            success: true,
            message: 'Order deleted successfully!'
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete order.'
        });
    }
});

module.exports = router;
