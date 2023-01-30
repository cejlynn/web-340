const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Hello Routes: Home',
        message: 'Welcome to the Hello Routes Home Page!'
    })
});

app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Hello Routes: About',
        message: 'Welcome to the Hello Routes About Page'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Hello Routes: Contact',
        message: 'Welcome to the Hello Routes Contact Page'
    })
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});