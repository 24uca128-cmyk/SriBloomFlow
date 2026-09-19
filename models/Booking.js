const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    bookingId: {
        type: String,
        required: true,
        unique: true,
        default: () => 'EVT-' + Date.now().toString().slice(-6) + Math.floor(100 + Math.random() * 900)
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    customerName: {
        type: String,
        required: [true, 'Customer name is required']
    },
    customerEmail: {
        type: String,
        required: [true, 'Customer email is required']
    },
    customerPhone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    eventType: {
        type: String,
        required: [true, 'Event type is required'],
        default: 'Wedding Decoration'
    },
    eventDate: {
        type: Date,
        required: [true, 'Event date is required']
    },
    eventTime: {
        type: String,
        default: 'Morning'
    },
    venueAddress: {
        type: String,
        required: [true, 'Venue location/address is required']
    },
    guestCount: {
        type: Number,
        default: 100
    },
    budgetRange: {
        type: String,
        default: '₹25,000 - ₹50,000'
    },
    flowerThemes: {
        type: [String],
        default: ['Jasmine (Mallipoo)', 'Rose Garland', 'Traditional Marigold']
    },
    specialRequests: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['New', 'Reviewing', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'New'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Booking', bookingSchema);
