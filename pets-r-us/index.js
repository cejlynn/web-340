
/*

Title: index.js 
Author: Caitlynne Johnson
Bellevue University
Date: 2/26/2023
Description: Allows website connections with the help of express
Resources: Web 330 HTML, CSS, JavaScript Requirements, Web 340 
*/



// imports
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const Customers = require('./models/customers');
const Appointment = require('.models/appointment.js')

const CONN = 'mongodb+srv://web340_admin:Alaska99731@bellevueuniversity.x3pcqyt.mongodb.net/web340DB?retryWrites=true&w=majority';

// sets views and view engine as ejs

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/site", express.static(path.join(__dirname, "public/stylesheets")));

const PORT = process.env.PORT || 4000;

// connection to MONGODB

mongoose.connect(CONN).then(() => {
    console.log('Connection to MongoDB database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
})


// web pages

app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Landing Page',
        message: 'Welcome to our page!',
    });
});

app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming',
        message: 'Welcome to our grooming page!',
    });
});;

app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Pets-R-Us: Boarding',
        message: 'Welcome to our boarding page!',
    });
});;

app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Pets-R-Us: Training',
        message: 'Welcome to our training page!',
    });
});;

app.get('/register', (req, res) => {
    res.render('register', {
        title: 'Pets-R-Us: Register',
        message: 'Welcome to our register page!',
    });
});;

app.get('/customer-list', (req, res) => {
    res.render('customer-list', {
        title: 'Pets-R-Us: Customer List',
        message: 'Welcome to our customer list!',
    });
});;

app.get('/appointment', (req, res) => {
    res.render('appointment', {
        title: 'Pets-R-Us: My Appointments',
        message: 'Welcome to your appointments',
    });;
});

// posts the information submmited on the form into mongoDB

app.post('/customers', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.customerName);
    console.log(req.body.email);
    const newCustomer = new Customer({
        name: req.body.customerName,
        email: req.body.email,
    });

    console.log(newCustomer); // allows the information to be seen

    Customer.create(newCustomer, function(err, customer) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('index', {
                title: 'Pets-R-Us: Landing Page',
                message: 'Welcome to our page!',
        
            });
        }
    });
});

app.get('/customers', (req, res) => {
    Customer.find({}, function (err, customer) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('customer-list', {
                title: 'Pets-R-Us: Customer List',
                message: 'Welcome to our customer list!',
                customer: customer,
            });
        }
    });
});

// will load the JSON file 

app.get('appointment', (req, res) => {
    let jsonFile = fs.readFileSync(".public/data/services.json");
    let services = JSON.parse(jsonFile);

    console.log(services);

    res.render('appointment', {
        title: 'Pets-R-Us: My Appointments',
        message: "Pets-R-Us: My Appointments",
        services: services,
    });
});

// posts the information submmited on the form into mongoDB

app.post('/appointment', (req, res, next) => {
    // console.log(req.body);
    // console.log(req.body.firstName);
    // console.log(req.body.lastName);
    // console.log(req.body.email);
    // console.log(req.body.service);
    const newAppointment = new Appointment ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        service: req.body.service,
    });

    console.log(newAppointment); 

    // creates information and adds it then returns a user to the index page
    Appointment.create(newAppointment, function(err, order) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('index', {
                title: 'Pets-R-Us: Landing Page',
                message: 'Welcome to our page!',
            });
        }
    });
});




app.listen(PORT, () => {
    console.log("Application started and listening on PORT " + PORT);
  });


console.log('\n  Press Ctrl+C to stop the server...') 