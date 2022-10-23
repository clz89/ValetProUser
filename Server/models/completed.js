const mongoose = require('mongoose');

const compSchema = new mongoose.Schema({
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
    payment: String,
    hot: String,
    status: String,
    complete: String
}, { timestamps: true });

const comp = mongoose.model('comp', compSchema);

module.exports = comp;