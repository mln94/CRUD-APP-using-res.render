const express = require('express');
require("dotenv").config();
const path = require('path');
const indexRoutes = require('./server/routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require('./server/connections/database');
connectDB();
// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use routes
app.use('/', indexRoutes);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});