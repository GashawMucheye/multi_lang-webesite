const express = require('express');
const multer = require('multer');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new testimonial
router.post('/', upload.single('image'), async (req, res) => {
  const { name, content, rating } = req.body;
  const imageUrl = req.file ? req.file.path : '';

  try {
    const newTestimonial = new Testimonial({ name, content, rating, imageUrl });
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(400).json({ message: 'Error saving testimonial' });
  }
});

module.exports = router;
