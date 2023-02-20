const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Customers = require('./models/customers');

const app = express();

const CONN = 'mongodb+srv://web340_admin:Alaska99731@bellevueuniversity.x3pcqyt.mongodb.net/web340DB?retryWrites=true&w=majority';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(CONN).then(() => {
    console.log('Connection to MongoDB database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
})

app.listen(PORT, () => {
    Customers.find({}, function(err, customers) {
        if (err) {
            console.log(err);
        } else {
            console.log('\n  --DISPLAYING CUSTOMER LIST--');
            for(let customer of customers) {
                console.log(`  Customer Name: ${customer.name}`)
            }

            Fruit.findOne({'name': 'Jacke'}, function(err, customer) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('\n  --SELECTED CUSTOMER--');
                    console.log(`  Customer name: ${customer.name}`) }
                })
            }
        })
    })


app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Landing Page',
        message: 'Welcome to our page!'
    })
});

app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Grooming',
        message: 'Welcome to our grooming page!'
    })
})

app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Boarding',
        message: 'Welcome to our boarding page!'
    })
})

app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Training',
        message: 'Welcome to our training page!'
    })
})

app.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register',
        message: 'Welcome to our register page!'
    })
})

app.get('/customer-list', (req, res) => {
    res.render('customer-list', {
        title: 'Customer List',
        message: 'Welcome to our customer list!'
    })
})

app.post('/customers', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.customerName);
    const newFruit = new Customer({
        name: req.body.customerName
    })

    console.log(newCustomer);

    Customer.create(newCustomer, function(err, customer) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('index', {

            })
        }
    })
})

console.log('\n  Press Ctrl+C to stop the server...') 