const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

// @route   GET /api/notifications
// @desc    Get notifications for admin or user
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { recipient, email } = req.query;
        let query = {};

        if (email) {
            query = {
                $or: [
                    { recipientEmail: email.toLowerCase().trim() },
                    { recipientType: 'all' }
                ]
            };
        } else if (recipient === 'admin') {
            query = {
                $or: [
                    { recipientType: 'admin' },
                    { recipientType: 'all' }
                ]
            };
        }

        const notifications = await Notification.find(query)
            .sort({ createdAt: -1 })
            .limit(50);

        const unreadCount = await Notification.countDocuments({
            ...query,
            read: false
        });

        res.json({
            success: true,
            count: notifications.length,
            unreadCount,
            data: notifications
        });
    } catch (err) {
        console.error('Get Notifications Error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve notifications.'
        });
    }
});

// @route   POST /api/notifications
// @desc    Create a new notification
// @access  Public
router.post('/', async (req, res) => {
    try {
        const {
            recipientType,
            recipientEmail,
            type,
            title,
            message,
            orderId,
            trackingId,
            amount
        } = req.body;

        if (!title || !message) {
            return res.status(400).json({
                success: false,
                message: 'Title and message are required.'
            });
        }

        const notification = await Notification.create({
            recipientType: recipientType || 'admin',
            recipientEmail: (recipientEmail || '').toLowerCase().trim(),
            type: type || 'order_placed',
            title,
            message,
            orderId: orderId || '',
            trackingId: trackingId || '',
            amount: Number(amount) || 0,
            read: false
        });

        res.status(201).json({
            success: true,
            data: notification
        });
    } catch (err) {
        console.error('Create Notification Error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to create notification.'
        });
    }
});

// @route   PUT /api/notifications/:id/read
// @desc    Mark a notification as read
// @access  Public
router.put('/:id/read', async (req, res) => {
    try {
        const { id } = req.params;
        const notification = await Notification.findByIdAndUpdate(
            id,
            { read: true },
            { new: true }
        );

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: 'Notification not found.'
            });
        }

        res.json({
            success: true,
            data: notification
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update notification.'
        });
    }
});

// @route   PUT /api/notifications/mark-all-read
// @desc    Mark all notifications as read for recipient or email
// @access  Public
router.put('/mark-all-read', async (req, res) => {
    try {
        const { recipient, email } = req.body;
        let query = {};

        if (email) {
            query = { recipientEmail: email.toLowerCase().trim() };
        } else if (recipient === 'admin') {
            query = { recipientType: 'admin' };
        }

        await Notification.updateMany(query, { read: true });

        res.json({
            success: true,
            message: 'All notifications marked as read.'
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to mark all as read.'
        });
    }
});

module.exports = router;
