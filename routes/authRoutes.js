const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// Helper to generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'bloomflow_super_secret_jwt_key_2026_secure', {
        expiresIn: process.env.JWT_EXPIRE || '7d'
    });
};

// @route   POST /api/auth/register
// @desc    Register a new customer
// @access  Public
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide name, email, and password.'
            });
        }

        // Check if user already exists
        const userExists = await User.findOne({ email: email.toLowerCase().trim() });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'An account with this email already exists.'
            });
        }

        // Create new user
        const user = await User.create({
            name,
            email: email.toLowerCase().trim(),
            password,
            phone: phone || '',
            address: address || {},
            role: 'customer'
        });

        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            message: 'User registered successfully!',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });
    } catch (err) {
        console.error('Register Error:', err);
        res.status(500).json({
            success: false,
            message: err.message || 'Server error while registering user.'
        });
    }
});

// @route   POST /api/auth/login
// @desc    Login user (Customer)
// @access  Public
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please enter both email and password.'
            });
        }

        // Find user by email
        const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password');
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password.'
            });
        }

        // Match password
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password.'
            });
        }

        const token = generateToken(user._id);

        res.json({
            success: true,
            message: 'Login successful!',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                address: user.address
            }
        });
    } catch (err) {
        console.error('Login Error:', err);
        res.status(500).json({
            success: false,
            message: err.message || 'Server error while logging in.'
        });
    }
});

// @route   POST /api/auth/admin-login
// @desc    Admin login
// @access  Public
router.post('/admin-login', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const loginIdentifier = (email || username || '').toLowerCase().trim();

        if (!loginIdentifier || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please enter admin username/email and password.'
            });
        }

        // Check if matching admin exists
        const adminUser = await User.findOne({
            $or: [
                { email: loginIdentifier },
                { name: loginIdentifier }
            ],
            role: 'admin'
        }).select('+password');

        if (!adminUser) {
            // Check default hardcoded fallback for quick setup if DB has not been seeded yet
            if ((loginIdentifier === 'admin' || loginIdentifier === 'admin@bloomflow.com') && password === 'admin123') {
                return res.json({
                    success: true,
                    message: 'Admin access granted (Seed Admin).',
                    token: 'admin-temp-session-token',
                    user: {
                        name: 'BloomFlow Administrator',
                        email: 'admin@bloomflow.com',
                        role: 'admin'
                    }
                });
            }

            return res.status(401).json({
                success: false,
                message: 'Invalid admin credentials.'
            });
        }

        const isMatch = await adminUser.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid admin credentials.'
            });
        }

        const token = generateToken(adminUser._id);

        res.json({
            success: true,
            message: 'Admin authenticated successfully!',
            token,
            user: {
                id: adminUser._id,
                name: adminUser.name,
                email: adminUser.email,
                role: adminUser.role
            }
        });
    } catch (err) {
        console.error('Admin Login Error:', err);
        res.status(500).json({
            success: false,
            message: err.message || 'Server error during admin login.'
        });
    }
});

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get('/me', protect, async (req, res) => {
    try {
        res.json({
            success: true,
            user: req.user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch user profile.'
        });
    }
});

module.exports = router;
