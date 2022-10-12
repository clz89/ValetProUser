const Pull = require('../models/pulls');

const createPull = async (req, res) => {
    try {
        const pull = new Pull(req.body);
        await pull.save();
        res.status(201).json(pull);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getPulls = async (req, res) => {
    try {
        const pull = await Pull.find();
        res.status(200).json(pull);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const updatePull = async (req, res) => {
    try {
        const keys = Object.keys(req.body);
        const pull = await Pull.findById({ _id: req.params.id });
        keys.forEach(update => pull[update] = req.body[update]);
        await pull.save();
        res.status(200).json(pull);
    } catch (error) {
        res.status(400).json(error);
    }
}

const deletePull = async (req, res) => {
    try {
        await Pull.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ message: 'Post was deleted' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const likePull = async (req, res) => {
    try {
        console.log(res.params);
        const pull = await Pull.findById({ _id: req.params.id });
        console.log(pull);
        pull.likes = pull.likes + 1;
        await pull.save();
        res.status(200).json(pull);
    } catch (error) {
        console.log(error)
    }

}

module.exports = { createPull, getPulls, updatePull, deletePull, likePull }