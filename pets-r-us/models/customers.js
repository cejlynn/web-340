
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true }
})

module.exports = mongoose.model('Customers', customerSchema);