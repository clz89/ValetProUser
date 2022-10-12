const mongoose = require('mongoose');

const outSchema = new mongoose.Schema({
    type: String,
    ticket: String,
    price: String,
    name: String,
    vip: String,
    room: String,
    retrieve: String,
    depart: String,
    outfront: String,
    vmake: String,
    notes: String,
    vcolor: String,
    pspot: String, 
    vmodel: String, 
    license: String,
    returning: String,
    hot: String,
    checkout: String,
    complete: String
}, { timestamps: true });

const out = mongoose.model('out', outSchema);

module.exports = out;