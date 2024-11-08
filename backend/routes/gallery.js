const express = require('express');
const routerGalleries = express.Router();
const Gallery = require('../models/gallery');
const multer = require('multer');
const mongoose = require('mongoose');

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

// CREATE a new gallery item
routerGalleries.post('/', upload.single('image'), async (req, res) => {
  const { title, description, category } = req.body;
  const imageUrl = req.file ? req.file.path : '';

  try {
    const newGalleryItem = new Gallery({
      title,
      description,
      imageUrl,
      category,
    });
    const savedGalleryItem = await newGalleryItem.save();
    res.status(201).json(savedGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ all gallery items or filter by category
routerGalleries.get('/', async (req, res) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const galleryItems = await Gallery.find(filter);
    res.json(galleryItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ one gallery item by ID
routerGalleries.get('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json(galleryItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a gallery item by ID
routerGalleries.put('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    galleryItem.title = req.body.title || galleryItem.title;
    galleryItem.description = req.body.description || galleryItem.description;
    galleryItem.imageUrl = req.body.imageUrl || galleryItem.imageUrl;
    galleryItem.category = req.body.category || galleryItem.category;

    const updatedGalleryItem = await galleryItem.save();
    res.json(updatedGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a gallery item by ID
routerGalleries.delete('/:id', async (req, res) => {
  const paramsId = req.params._id;

  if (!mongoose.Types.ObjectId.isValid(paramsId)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const galleryItem = await Gallery.findById(paramsId);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    await galleryItem.deleteOne();
    res.status(200).json({ message: 'Gallery deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = routerGalleries;
