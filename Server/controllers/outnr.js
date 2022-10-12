const Out = require('../models/outnr');

const createOut = async (req, res) => {
    try {
        const out = new Out(req.body);
        await out.save();
        res.status(201).json(out);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getOuts = async (req, res) => {
    try {
        const out = await Out.find();
        res.status(200).json(out);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const updateOut = async (req, res) => {
    try {
        const keys = Object.keys(req.body);
        const out = await Out.findById({ _id: req.params.id });
        keys.forEach(update => out[update] = req.body[update]);
        await out.save();
        res.status(200).json(out);
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteOut = async (req, res) => {
    try {
        await Out.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ message: 'Post was deleted' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const likeOut = async (req, res) => {
    try {
        console.log(res.params);
        const out = await Out.findById({ _id: req.params.id });
        console.log(out);
        out.likes = out.likes + 1;
        await out.save();
        res.status(200).json(out);
    } catch (error) {
        console.log(error)
    }

}

module.exports = { createOut, getOuts, updateOut, deleteOut, likeOut }