const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const User = require('../models/User');

const defaultProducts = [
    {
        id: 1,
        name: "Mallipoo",
        category: "flowers",
        type: "flower",
        price: 120,
        unit: "100g",
        image: "images/jas.jpg",
        rating: 4.9,
        badge: "Best Seller",
        tagline: "Fresh and highly fragrant local jasmine flowers."
    },
    {
        id: 2,
        name: "Mullai",
        category: "flowers",
        type: "flower",
        price: 100,
        unit: "100g",
        image: "images/mullai.jpg",
        rating: 4.8,
        badge: "Popular",
        tagline: "Fresh and delicate Mullai flowers."
    },
    {
        id: 3,
        name: "Samanthi",
        category: "flowers",
        type: "flower",
        price: 30,
        unit: "100g",
        image: "images/marigold.jpg",
        rating: 4.7,
        badge: "Fresh",
        tagline: "Bright yellow Samanthi flowers for every occasion."
    },
    {
        id: 4,
        name: "Sevanthi",
        category: "flowers",
        type: "flower",
        price: 40,
        unit: "100g",
        image: "images/sevanthi.jpg",
        rating: 4.7,
        badge: "Popular",
        tagline: "Beautiful fresh Sevanthi flowers in vibrant shades."
    },
    {
        id: 5,
        name: "Kanakambaram Maalai",
        category: "maalai",
        type: "maalai",
        price: 350,
        unit: "1 piece",
        image: "images/kanakambaram.jpg",
        rating: 4.8,
        badge: "Traditional",
        tagline: "Bright orange traditional hand-crafted Kanakambaram garland."
    },
    {
        id: 6,
        name: "Pichi",
        category: "flowers",
        type: "flower",
        price: 90,
        unit: "100g",
        image: "images/pichi.jpg",
        rating: 4.8,
        badge: "Fragrant",
        tagline: "Soft and fragrant Pichi flowers, freshly selected."
    },
    {
        id: 7,
        name: "Arali",
        category: "flowers",
        type: "flower",
        price: 30,
        unit: "100g",
        image: "images/arali.jpg",
        rating: 4.5,
        badge: "Traditional",
        tagline: "Traditional Arali flowers suitable for prayers."
    },
    {
        id: 8,
        name: "Hibiscus",
        category: "flowers",
        type: "flower",
        price: 40,
        unit: "100g",
        image: "images/hibiscus.jpg",
        rating: 4.6,
        badge: "Fresh",
        tagline: "Fresh vibrant Hibiscus flowers."
    },
    {
        id: 9,
        name: "Lotus",
        category: "flowers",
        type: "flower",
        price: 50,
        unit: "1 piece",
        image: "images/Lotus.jpg",
        rating: 4.9,
        badge: "Sacred",
        tagline: "Fresh Lotus flower, perfect for prayers and decoration."
    },
    {
        id: 10,
        name: "Gerbera",
        category: "flowers",
        type: "flower",
        price: 50,
        unit: "100g",
        image: "images/gerbera.jpg",
        rating: 4.7,
        badge: "Vibrant",
        tagline: "Colorful and beautiful Gerbera flowers."
    },
    {
        id: 11,
        name: "Rose",
        category: "flowers",
        type: "flower",
        price: 40,
        unit: "100g",
        image: "images/rose.jpg",
        rating: 4.8,
        badge: "Romantic",
        tagline: "Fresh roses with beautiful color and fragrance."
    },
    {
        id: 12,
        name: "Mallipoo Maalai",
        category: "maalai",
        type: "maalai",
        price: 450,
        unit: "1 piece",
        image: "images/mallipoo maalai.jpg",
        rating: 4.9,
        badge: "Best Seller",
        tagline: "Traditional fragrant Mallipoo Maalai."
    },
    {
        id: 13,
        name: "Rose Maalai",
        category: "maalai",
        type: "maalai",
        price: 650,
        unit: "1 piece",
        image: "images/rose maalai.jpg",
        rating: 4.9,
        badge: "Premium",
        tagline: "Elegant Rose Maalai for special occasions."
    },
    {
        id: 14,
        name: "Samanthi Maalai",
        category: "maalai",
        type: "maalai",
        price: 400,
        unit: "1 piece",
        image: "images/samanthi maalai.jpg",
        rating: 4.8,
        badge: "Traditional",
        tagline: "Fresh Samanthi Maalai for celebrations."
    },
    {
        id: 15,
        name: "Sambangi Maalai",
        category: "maalai",
        type: "maalai",
        price: 450,
        unit: "1 piece",
        image: "images/sambangi.jpg",
        rating: 4.8,
        badge: "Fragrant",
        tagline: "Beautiful and aromatic Sambangi Maalai."
    },
    {
        id: 16,
        name: "Petals Maalai",
        category: "maalai",
        type: "maalai",
        price: 550,
        unit: "1 piece",
        image: "images/petals maalai.jpg",
        rating: 4.7,
        badge: "Premium",
        tagline: "Colorful decorative flower-petal Maalai."
    },
    {
        id: 17,
        name: "Ooty Rose Maalai",
        category: "maalai",
        type: "maalai",
        price: 650,
        unit: "1 piece",
        image: "images/ooty rose maalai.jpg",
        rating: 4.9,
        badge: "Premium",
        tagline: "Elegant Ooty Rose Maalai for special events."
    },
    {
        id: 18,
        name: "Lotus Maalai",
        category: "maalai",
        type: "maalai",
        price: 550,
        unit: "1 piece",
        image: "images/Lotus.jpg",
        rating: 4.8,
        badge: "Sacred",
        tagline: "Beautiful Lotus Maalai for traditional occasions."
    },
    {
        id: 19,
        name: "Gerbera Maalai",
        category: "maalai",
        type: "maalai",
        price: 500,
        unit: "1 piece",
        image: "images/gerbera.jpg",
        rating: 4.7,
        badge: "Vibrant",
        tagline: "Colorful Gerbera flower Maalai."
    },
    {
        id: 20,
        name: "Orchid Maalai",
        category: "maalai",
        type: "maalai",
        price: 850,
        unit: "1 piece",
        image: "images/orchid.jpg",
        rating: 4.9,
        badge: "Luxury",
        tagline: "Premium Orchid Maalai for elegant celebrations."
    },
    {
        id: 21,
        name: "Vetriver Maalai",
        category: "maalai",
        type: "maalai",
        price: 350,
        unit: "1 piece",
        image: "images/vetriver.jpg",
        rating: 4.6,
        badge: "Traditional",
        tagline: "Traditional fragrant Vetriver Maalai."
    },
    {
        id: 22,
        name: "Cardamom Maalai",
        category: "maalai",
        type: "maalai",
        price: 500,
        unit: "1 piece",
        image: "images/cardamom.jpg",
        rating: 4.6,
        badge: "Special",
        tagline: "Special traditional Cardamom Maalai."
    },
    {
        id: 23,
        name: "Rose and Sevanthi Maalai",
        category: "maalai",
        type: "maalai",
        price: 600,
        unit: "1 piece",
        image: "images/rose and sevanthi.jpg",
        rating: 4.8,
        badge: "Popular",
        tagline: "Beautiful combination of Rose and Sevanthi flowers."
    },
    {
        id: 24,
        name: "Mayilliragu Maalai",
        category: "maalai",
        type: "maalai",
        price: 750,
        unit: "1 piece",
        image: "images/mayilmaalai.jpg",
        rating: 4.8,
        badge: "Special",
        tagline: "Traditional decorative Mayilliragu Maalai."
    },
    {
        id: 25,
        name: "Vaadamalli Maalai",
        category: "maalai",
        type: "maalai",
        price: 450,
        unit: "1 piece",
        image: "images/Vadamalli.webp",
        rating: 4.7,
        badge: "Traditional",
        tagline: "Beautiful traditional Vaadamalli Maalai."
    }
];

// @route   GET/POST /api/seed
// @desc    Seed database with default flowers and admin user
// @access  Public
router.all('/', async (req, res) => {
    try {
        // 1. Seed or Upsert Products
        for (const item of defaultProducts) {
            await Product.findOneAndUpdate(
                { id: item.id },
                { ...item, isAvailable: true },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
        }

        // 2. Seed Default Admin User if not exists
        let admin = await User.findOne({ email: 'admin@bloomflow.com' });
        if (!admin) {
            admin = await User.create({
                name: 'BloomFlow Administrator',
                email: 'admin@bloomflow.com',
                password: 'admin123',
                role: 'admin',
                phone: '+91 98765 43210',
                address: {
                    street: '12 Car Street',
                    city: 'Sivakasi',
                    state: 'Tamil Nadu',
                    zipCode: '626123'
                }
            });
        }

        // 3. Seed Demo Customer User if not exists
        let demoCustomer = await User.findOne({ email: 'customer@bloomflow.com' });
        if (!demoCustomer) {
            demoCustomer = await User.create({
                name: 'Priya Sundaram',
                email: 'customer@bloomflow.com',
                password: 'password123',
                role: 'customer',
                phone: '+91 94432 10987',
                address: {
                    street: '45 Kamaraj Road',
                    city: 'Sivakasi',
                    state: 'Tamil Nadu',
                    zipCode: '626123'
                }
            });
        }

        const productCount = await Product.countDocuments();

        res.json({
            success: true,
            message: 'BloomFlow Database seeded successfully with flowers and initial accounts!',
            details: {
                totalProducts: productCount,
                adminAccount: 'admin@bloomflow.com / admin123',
                demoCustomer: 'customer@bloomflow.com / password123'
            }
        });
    } catch (err) {
        console.error('Database Seed Error:', err);
        res.status(500).json({
            success: false,
            message: err.message || 'Failed to seed MongoDB.'
        });
    }
});

module.exports = router;
