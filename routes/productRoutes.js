const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @route   GET /api/products
// @desc    Get all flower products with optional category, search, and sorting
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { category, search, type, sort } = req.query;
        let query = { isAvailable: true };

        // Category filter
        if (category && category !== 'all') {
            query.category = category.toLowerCase();
        }

        // Type filter (flower, maalai, lotus, etc.)
        if (type && type !== 'all') {
            query.type = type.toLowerCase();
        }

        // Search filter (name, tagline, description)
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { tagline: { $regex: search, $options: 'i' } },
                { badge: { $regex: search, $options: 'i' } }
            ];
        }

        let productQuery = Product.find(query);

        // Sorting options
        if (sort === 'price-low') {
            productQuery = productQuery.sort({ price: 1 });
        } else if (sort === 'price-high') {
            productQuery = productQuery.sort({ price: -1 });
        } else if (sort === 'rating') {
            productQuery = productQuery.sort({ rating: -1 });
        } else {
            productQuery = productQuery.sort({ id: 1 });
        }

        const products = await productQuery;

        res.json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (err) {
        console.error('Fetch Products Error:', err);
        res.status(500).json({
            success: false,
            message: 'Server error while retrieving products.'
        });
    }
});

// @route   GET /api/products/:id
// @desc    Get single product by ID (numeric id or Mongo _id)
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let product;

        // Try lookup by numeric id
        if (!isNaN(id)) {
            product = await Product.findOne({ id: Number(id) });
        }

        // If not found, try Mongo ObjectId
        if (!product && id.match(/^[0-9a-fA-F]{24}$/)) {
            product = await Product.findById(id);
        }

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Flower product not found.'
            });
        }

        res.json({
            success: true,
            data: product
        });
    } catch (err) {
        console.error('Get Product Error:', err);
        res.status(500).json({
            success: false,
            message: 'Server error retrieving product details.'
        });
    }
});

// @route   POST /api/products
// @desc    Add a new product
// @access  Public/Admin
router.post('/', async (req, res) => {
    try {
        const { name, category, type, price, unit, image, rating, badge, tagline, stock } = req.body;

        if (!name || price === undefined) {
            return res.status(400).json({
                success: false,
                message: 'Product name and price are required.'
            });
        }

        // Find max ID if not provided
        let newId = req.body.id;
        if (!newId) {
            const lastProduct = await Product.findOne().sort({ id: -1 });
            newId = (lastProduct && lastProduct.id) ? lastProduct.id + 1 : 1;
        }

        const product = await Product.create({
            id: newId,
            name,
            category: category || 'flowers',
            type: type || 'flower',
            price: Number(price),
            unit: unit || '100g',
            image: image || 'images/jas.jpg',
            rating: rating ? Number(rating) : 4.8,
            badge: badge || 'Fresh',
            tagline: tagline || 'Authentic fresh flowers from Sivakasi.',
            stock: stock !== undefined ? Number(stock) : 100
        });

        res.status(201).json({
            success: true,
            message: 'Product created successfully!',
            data: product
        });
    } catch (err) {
        console.error('Create Product Error:', err);
        res.status(500).json({
            success: false,
            message: err.message || 'Failed to create product.'
        });
    }
});

// @route   PUT /api/products/:id
// @desc    Update an existing product
// @access  Public/Admin
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let query = isNaN(id) ? { _id: id } : { id: Number(id) };

        const product = await Product.findOneAndUpdate(query, req.body, {
            new: true,
            runValidators: true
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found to update.'
            });
        }

        res.json({
            success: true,
            message: 'Product updated successfully!',
            data: product
        });
    } catch (err) {
        console.error('Update Product Error:', err);
        res.status(500).json({
            success: false,
            message: err.message || 'Failed to update product.'
        });
    }
});

// @route   DELETE /api/products/:id
// @desc    Delete a product
// @access  Public/Admin
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let query = isNaN(id) ? { _id: id } : { id: Number(id) };

        const product = await Product.findOneAndDelete(query);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found to delete.'
            });
        }

        res.json({
            success: true,
            message: 'Product deleted successfully!',
            data: {}
        });
    } catch (err) {
        console.error('Delete Product Error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to delete product.'
        });
    }
});

module.exports = router;
