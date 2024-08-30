const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "assets" directory
app.use(express.static(path.join(__dirname, 'assets')));

// Set up the view engine and the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { Title: "University Of Ruhuna" });
});

app.get('/maps', (req, res) => {
    res.render('maps', { Title: "Maps" });
});

app.get('/notes', (req, res) => {
    res.render('notes', { Title: "Notes" });
});

app.get('/gpa', (req, res) => {
    res.render('gpaCalulator', { Title: "GPA Calculator" });
});

app.get('/courses', (req, res) => {
    res.render('courses', { Title: "Courses" });
});

app.get('/transportation', (req, res) => {
    res.render('transportation', { Title: "Transportation" });
});

app.get('/food_stall', (req, res) => {
    res.render('food_stall', { Title: "Food Stalls" });
});

app.get('/about', (req, res) => {
    res.render('about', { Title: "About" });
});

app.get('/test', (req, res) => {
    res.render('test', { Title: "Test" });
});

// 404 Error Handler (for unmatched routes)
app.use((req, res) => {
    res.status(404).render('404', { Title: '404-Not Found' });
});

// Error Handling Middleware (should be placed at the end)
app.use((err, req, res, next) => {
    console.error('An error occurred:', err.stack);
    res.status(500).send('Something broke!');
});

// Set up the port
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
