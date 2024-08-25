const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.static("./assets"))
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index', {Title:"University Of Ruhuna"});
})

app.get('/maps', (req, res)=>{
    res.render('maps', {Title:"Maps"});
})

app.get('/notes', (req, res)=>{
    res.render('notes', {Title:"Notes"});
})

app.get('/gpa', (req, res)=>{
    res.render('gpaCalulator', {Title:"GPA Calculator"});
})

app.get('/courses', (req, res)=>{
    res.render('courses', {Title:"Courses"});
})

app.get('/transportation', (req, res)=>{
    res.render('transportation', {Title:"Transportation"});
})

app.get('/food_stall', (req, res)=>{
    res.render('food_stall', {Title:"Food Stalls"});
})

app.get('/about', (req, res)=>{
    res.render('about', {Title:"Food Stalls"});
})

app.get('/test', (req, res)=>{
    res.render('test', {Title:"Food Stalls"});
})

app.use((req, res) => {
    res.status(404).render('404', {Title:'404-Not Found'})
})

app.listen(PORT, ()=> console.log(`server running on http://localhost:${PORT}`));