const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Product = require('./models/Product');
const User = require('./models/User');

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
        name: "Kanakambaram",
        category: "flowers",
        type: "flower",
        price: 100,
        unit: "100g",
        image: "images/kanakambaram_loose.jpg",
        rating: 4.8,
        badge: "Traditional",
        tagline: "Bright orange fresh loose Kanakambaram flowers."
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
    },
    {
        id: 26,
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
        id: 27,
        name: "Royal Mullai Maalai",
        category: "maalai",
        type: "maalai",
        price: 480,
        unit: "1 piece",
        image: "images/mullaiaaram.jpg",
        rating: 4.9,
        badge: "Auspicious",
        tagline: "Traditional fragrant fresh Mullai sacred floral maalai."
    },
    {
        id: 101,
        name: "Pastel Dream Rose Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 699,
        unit: "1 Bouquet",
        image: "images/bouquet_pastel_roses.jpg",
        rating: 4.9,
        badge: "Best Seller",
        tagline: "Soft blush pink roses mixed with baby's breath and premium frosted wrap."
    },
    {
        id: 102,
        name: "Classic Romance Red Rose Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 599,
        unit: "1 Bouquet",
        image: "images/bouquet_red_roses.jpg",
        rating: 4.9,
        badge: "Hot Choice",
        tagline: "Stunning red velvet roses hand-tied with elegant silk ribbon & gypsophila."
    },
    {
        id: 103,
        name: "Blush Pink Lily Charm Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 850,
        unit: "1 Bouquet",
        image: "images/bouquet_pink_lily.jpg",
        rating: 4.9,
        badge: "Exotic",
        tagline: "Fragrant Oriental Pink Lilies with fresh eucalyptus and lavender wrap."
    },
    {
        id: 104,
        name: "Elegance Pink Rose Bunch",
        category: "bouquets",
        type: "bouquet",
        price: 550,
        unit: "1 Bouquet",
        image: "images/bouquet_pink_roses.jpg",
        rating: 4.8,
        badge: "Fresh Pick",
        tagline: "Fresh morning pink roses wrapped in Korean frosted paper with love."
    },
    {
        id: 105,
        name: "Royal White Bridal Lily Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 899,
        unit: "1 Bouquet",
        image: "images/bouquet_white_bridal.jpg",
        rating: 5.0,
        badge: "Bridal Special",
        tagline: "Pristine white lilies and fragrant baby blooms for weddings and celebrations."
    },
    {
        id: 106,
        name: "Exotic Purple Orchid Luxury Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 950,
        unit: "1 Bouquet",
        image: "images/bouquet_purple_orchid.jpg",
        rating: 4.9,
        badge: "Luxury",
        tagline: "Premium fresh orchids wrapped in matte black and gold foil."
    },
    {
        id: 107,
        name: "Deluxe Mixed Rose Festival Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 650,
        unit: "1 Bouquet",
        image: "images/mixedrosebouquet.jpg",
        rating: 4.8,
        badge: "Festival Special",
        tagline: "Joyful blend of red, pink, yellow & orange fresh roses with greenery."
    },
    {
        id: 108,
        name: "Sivakasi Velvet Red Rose Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 599,
        unit: "1 Bouquet",
        image: "images/redrosebouquet.jpg",
        rating: 4.9,
        badge: "Best Seller",
        tagline: "Handpicked deep crimson red roses in artisan textured red wrap."
    },
    {
        id: 109,
        name: "Sweet Pink Romance Rose Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 550,
        unit: "1 Bouquet",
        image: "images/pinkrosebouquet.jpg",
        rating: 4.8,
        badge: "Romantic",
        tagline: "Tender pink roses bundled with delicate baby's breath and blush ribbons."
    },
    {
        id: 110,
        name: "Radiant Golden Yellow Rose Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 499,
        unit: "1 Bouquet",
        image: "images/yellowrosebouquet.jpg",
        rating: 4.7,
        badge: "Friendship Special",
        tagline: "Bright yellow roses symbolizing friendship and joyous celebrations."
    },
    {
        id: 111,
        name: "Sunset Vibrant Orange Rose Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 550,
        unit: "1 Bouquet",
        image: "images/orangerosebouquet.jpg",
        rating: 4.8,
        badge: "Vibrant",
        tagline: "Warm orange fresh roses wrapped with rustic craft paper and golden twine."
    },
    {
        id: 112,
        name: "Red & White Love Symphony Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 650,
        unit: "1 Bouquet",
        image: "images/redwhiterosebouquet.jpg",
        rating: 4.9,
        badge: "Anniversary Special",
        tagline: "Dual-tone arrangement of rich red roses and pure white roses."
    },
    {
        id: 113,
        name: "Rainbow Mixed Gerbera Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 499,
        unit: "1 Bouquet",
        image: "images/mixedgerberabouquet.jpg",
        rating: 4.8,
        badge: "Colorful",
        tagline: "Cheerful medley of yellow, red, pink and orange gerbera flowers."
    },
    {
        id: 114,
        name: "Graceful Pink Gerbera Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 450,
        unit: "1 Bouquet",
        image: "images/pinkgerberabouquet.jpg",
        rating: 4.7,
        badge: "Cute Choice",
        tagline: "Sweet pink gerberas arranged with seasonal fillers and soft wrap."
    },
    {
        id: 115,
        name: "Passionate Crimson Red Gerbera Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 450,
        unit: "1 Bouquet",
        image: "images/redgerberabouquet.jpg",
        rating: 4.7,
        badge: "Vibrant",
        tagline: "Bold red gerbera blooms in modern dual-layer packaging."
    },
    {
        id: 116,
        name: "Sunny Golden Yellow Gerbera Bouquet",
        category: "bouquets",
        type: "bouquet",
        price: 450,
        unit: "1 Bouquet",
        image: "images/yellowgerberabouquet.jpg",
        rating: 4.7,
        badge: "Cheerful",
        tagline: "Energetic yellow gerbera bouquet for congratulations and celebrations."
    },
    {
        id: 118,
        name: "Traditional Jasmine (Malli) Wedding Aaram",
        category: "maalai",
        type: "aaram",
        price: 850,
        unit: "1 Aaram",
        image: "images/jasmineaaram.jpg",
        rating: 4.9,
        badge: "Wedding Special",
        tagline: "Dense, highly fragrant Sivakasi Mallipoo wedding aaram hand-woven for bridal beauty."
    },
    {
        id: 119,
        name: "Royal Mullai Sacred Flower Aaram",
        category: "maalai",
        type: "aaram",
        price: 890,
        unit: "1 Aaram",
        image: "images/mullaiaaram.jpg",
        rating: 4.9,
        badge: "Traditional",
        tagline: "Premium fresh Mullai buds strung into an exquisite traditional auspicious aaram."
    },
    {
        id: 120,
        name: "Grand Rose Petals Wedding Aaram",
        category: "maalai",
        type: "aaram",
        price: 950,
        unit: "1 Aaram",
        image: "images/rosepetalsaaram.jpg",
        rating: 5.0,
        badge: "Grand Bridal",
        tagline: "Luxurious layered rose petal aaram crafted specifically for grand marriage ceremonies."
    }
];

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bloomflow_db');
        console.log('MongoDB Connected for Seeding...');

        // Upsert products
        for (const item of defaultProducts) {
            await Product.findOneAndUpdate(
                { id: item.id },
                { ...item, isAvailable: true },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
        }
        console.log('✅ Products Seeded Successfully!');

        // Seed Admin
        const adminExists = await User.findOne({ email: 'admin@bloomflow.com' });
        if (!adminExists) {
            await User.create({
                name: 'BloomFlow Administrator',
                email: 'admin@bloomflow.com',
                password: 'admin123',
                role: 'admin',
                phone: '+91 98765 43210'
            });
            console.log('✅ Admin Account Created (admin@bloomflow.com / admin123)');
        }

        console.log('🎉 Seeding process finished!');
        process.exit();
    } catch (err) {
        console.error('❌ Seeder Error:', err);
        process.exit(1);
    }
};

seedData();
