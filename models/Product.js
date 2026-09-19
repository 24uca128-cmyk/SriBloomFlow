const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: [true, 'Please add a product name'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Please specify category'],
        enum: ['flowers', 'garlands', 'bouquets', 'pooja', 'exotic', 'decorations', 'all'],
        default: 'flowers'
    },
    type: {
        type: String,
        default: 'flower'
    },
    price: {
        type: Number,
        required: [true, 'Please specify price in INR (₹)'],
        min: 0
    },
    unit: {
        type: String,
        default: '100g'
    },
    image: {
        type: String,
        required: [true, 'Please specify image path or URL'],
        default: 'images/jas.jpg'
    },
    rating: {
        type: Number,
        default: 4.8,
        min: 0,
        max: 5
    },
    badge: {
        type: String,
        default: 'Fresh'
    },
    tagline: {
        type: String,
        default: 'Freshly harvested authentic flowers.'
    },
    description: {
        type: String,
        default: ''
    },
    stock: {
        type: Number,
        default: 100
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);
