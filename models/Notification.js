const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    recipientType: {
        type: String,
        enum: ['admin', 'user', 'all'],
        default: 'admin'
    },
    recipientEmail: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        enum: ['order_placed', 'order_cancelled', 'order_status', 'booking_created', 'general'],
        default: 'order_placed'
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        default: ''
    },
    trackingId: {
        type: String,
        default: ''
    },
    amount: {
        type: Number,
        default: 0
    },
    read: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notification', notificationSchema);
