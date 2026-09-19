const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Booking = require('../models/Booking');
const Product = require('../models/Product');
const User = require('../models/User');

// @route   GET /api/admin/stats
// @desc    Get dashboard analytics overview
// @access  Public/Admin
router.get('/stats', async (req, res) => {
    try {
        // Aggregate Total Sales
        const salesAgg = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: '$grandTotal' },
                    orderCount: { $sum: 1 }
                }
            }
        ]);

        const grossSales = salesAgg.length > 0 ? salesAgg[0].totalSales : 0;
        const totalOrders = salesAgg.length > 0 ? salesAgg[0].orderCount : 0;

        const totalBookings = await Booking.countDocuments();
        const totalProducts = await Product.countDocuments();
        const totalCustomers = await User.countDocuments({ role: 'customer' });

        // Get Recent 5 Orders
        const recentOrders = await Order.find()
            .sort({ createdAt: -1 })
            .limit(5);

        // Get Recent 5 Bookings
        const recentBookings = await Booking.find()
            .sort({ createdAt: -1 })
            .limit(5);

        res.json({
            success: true,
            stats: {
                grossSales,
                totalOrders,
                totalBookings,
                totalProducts,
                totalCustomers
            },
            recentOrders,
            recentBookings
        });
    } catch (err) {
        console.error('Admin Stats Error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to compute admin statistics.'
        });
    }
});

module.exports = router;
