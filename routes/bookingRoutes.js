const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// @route   POST /api/bookings
// @desc    Submit a new event decoration booking
// @access  Public
router.post('/', async (req, res) => {
    try {
        const {
            customerName,
            customerEmail,
            customerPhone,
            eventType,
            eventDate,
            eventTime,
            venueAddress,
            guestCount,
            budgetRange,
            flowerThemes,
            specialRequests
        } = req.body;

        if (!customerName || !customerPhone || !eventType || !eventDate || !venueAddress) {
            return res.status(400).json({
                success: false,
                message: 'Name, phone, event type, date, and venue address are required.'
            });
        }

        const booking = await Booking.create({
            customerName,
            customerEmail: customerEmail || 'guest@bloomflow.com',
            customerPhone,
            eventType,
            eventDate: new Date(eventDate),
            eventTime: eventTime || 'Morning',
            venueAddress,
            guestCount: guestCount ? Number(guestCount) : 100,
            budgetRange: budgetRange || '₹25,000 - ₹50,000',
            flowerThemes: Array.isArray(flowerThemes) ? flowerThemes : (flowerThemes ? [flowerThemes] : []),
            specialRequests: specialRequests || '',
            status: 'New'
        });

        res.status(201).json({
            success: true,
            message: 'Event booking inquiry submitted successfully! Our florist team will contact you.',
            data: booking
        });
    } catch (err) {
        console.error('Create Booking Error:', err);
        res.status(500).json({
            success: false,
            message: err.message || 'Failed to submit event booking.'
        });
    }
});

// @route   GET /api/bookings/my-bookings
// @desc    Get event bookings for a specific customer
// @access  Public
router.get('/my-bookings', async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Please provide customer email.'
            });
        }

        const bookings = await Booking.find({ customerEmail: email.toLowerCase().trim() }).sort({ createdAt: -1 });

        res.json({
            success: true,
            count: bookings.length,
            data: bookings
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve bookings.'
        });
    }
});

// @route   GET /api/bookings
// @desc    Get all event bookings (Admin console)
// @access  Public/Admin
router.get('/', async (req, res) => {
    try {
        const { status } = req.query;
        let query = {};
        if (status && status !== 'all') {
            query.status = status;
        }

        const bookings = await Booking.find(query).sort({ createdAt: -1 });

        res.json({
            success: true,
            count: bookings.length,
            data: bookings
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve event bookings.'
        });
    }
});

// @route   PUT /api/bookings/:id/status
// @desc    Update booking status
// @access  Public/Admin
router.put('/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        let query = id.startsWith('EVT-') ? { bookingId: id } : { _id: id };

        const booking = await Booking.findOneAndUpdate(query, { status }, { new: true });
        if (!booking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found to update.'
            });
        }

        res.json({
            success: true,
            message: 'Booking status updated successfully!',
            data: booking
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update booking status.'
        });
    }
});

// @route   DELETE /api/bookings/:id
// @desc    Delete booking
// @access  Public/Admin
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let query = id.startsWith('EVT-') ? { bookingId: id } : { _id: id };

        const booking = await Booking.findOneAndDelete(query);
        if (!booking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found to delete.'
            });
        }

        res.json({
            success: true,
            message: 'Booking deleted successfully!'
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete booking.'
        });
    }
});

module.exports = router;
