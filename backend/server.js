const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`Connected to MongoDB`.bgGreen.underline))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const testimonialsRoute = require('./routes/testimonials');
app.use('/api/testimonials', testimonialsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgYellow.underline);
});
