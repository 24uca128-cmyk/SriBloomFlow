const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load Environment Variables
dotenv.config();

// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
if (process.env.NODE_ENV !== 'test') {
    try {
        const morgan = require('morgan');
        app.use(morgan('dev'));
    } catch (e) {
        // morgan optional
    }
}

// Serve Static Frontend Assets (HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname)));

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/seed', require('./routes/seedRoutes'));

// Health Check API
app.get('/api/health', (req, res) => {
    const isDbConnected = mongoose.connection.readyState === 1;
    res.json({
        success: true,
        status: 'UP',
        message: 'BloomFlow Express Server is running smoothly!',
        timestamp: new Date().toISOString(),
        database: {
            connected: isDbConnected,
            status: isDbConnected ? 'Connected to MongoDB' : 'Disconnected / Connecting'
        }
    });
});

// Root Route - Serve Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Clean Page Routing
app.get(['/customizer.html', '/customizer', '/customizer-bouquet', '/customize-bouquet'], (req, res) => {
    res.redirect('/bouquets.html');
});

app.get('/flowers', (req, res) => {
    res.sendFile(path.join(__dirname, 'flowers.html'));
});

app.get(['/bouquets', '/bouquets.html'], (req, res) => {
    res.sendFile(path.join(__dirname, 'bouquets.html'));
});

app.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, 'categories.html'));
});

app.get('/booking', (req, res) => {
    res.sendFile(path.join(__dirname, 'booking.html'));
});

app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'checkout.html'));
});

app.get('/payment', (req, res) => {
    res.sendFile(path.join(__dirname, 'payment.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin-login.html'));
});

// 404 Error handler for undefined API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `API Route ${req.originalUrl} not found.`
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err.stack || err);
    res.status(500).json({
        success: false,
        message: err.message || 'An unexpected internal server error occurred.'
    });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🌸 BloomFlow Full-Stack Server Running on Port ${PORT}`);
    console.log(`🌐 Website: http://localhost:${PORT}`);
    console.log(`📡 API Health: http://localhost:${PORT}/api/health`);
    console.log(`🌱 Auto-Seed DB: http://localhost:${PORT}/api/seed`);
    console.log(`======================================================\n`);
});

module.exports = app;
