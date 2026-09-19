const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    unit: {
        type: String,
        default: '100g'
    },
    image: {
        type: String,
        default: ''
    },
    itemTotal: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true,
        unique: true,
        default: () => 'BF-' + Date.now().toString().slice(-6) + Math.floor(100 + Math.random() * 900)
    },
    trackingId: {
        type: String,
        required: true,
        unique: true,
        default: () => 'TRK-BF-' + Date.now().toString().slice(-6) + Math.floor(100 + Math.random() * 900)
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
    deliveryAddress: {
        street: { type: String, default: '' },
        city: { type: String, default: 'Sivakasi' },
        state: { type: String, default: 'Tamil Nadu' },
        zipCode: { type: String, default: '626123' },
        landmark: { type: String, default: '' }
    },
    items: [orderItemSchema],
    totalAmount: {
        type: Number,
        required: true,
        default: 0
    },
    deliveryFee: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    grandTotal: {
        type: Number,
        required: true,
        default: 0
    },
    paymentMethod: {
        type: String,
        enum: ['COD', 'UPI', 'CARD', 'NETBANKING'],
        default: 'COD'
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed', 'Refunded', 'Cancelled'],
        default: 'Pending'
    },
    orderStatus: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Processing', 'Out for Delivery', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    refundDetails: {
        refundId: { type: String },
        amount: { type: Number },
        status: { type: String, default: 'Pending' },
        refundedAt: { type: Date },
        refundMethod: { type: String }
    },
    deliverySlot: {
        type: String,
        default: 'Morning (6 AM - 9 AM)'
    },
    orderNotes: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);
