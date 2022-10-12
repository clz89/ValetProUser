const Comp = require('../models/completed');

const createComp = async (req, res) => {
    try {
        const comp = new Comp(req.body);
        await comp.save();
        res.status(201).json(comp);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getComps = async (req, res) => {
    try {
        const comp = await Comp.find();
        res.status(200).json(comp);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const updateComp = async (req, res) => {
    try {
        const keys = Object.keys(req.body);
        const comp = await Comp.findById({ _id: req.params.id });
        keys.forEach(update => comp[update] = req.body[update]);
        await comp.save();
        res.status(200).json(comp);
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteComp = async (req, res) => {
    try {
        await Comp.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ message: 'Post was deleted' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const likeComp = async (req, res) => {
    try {
        console.log(res.params);
        const comp = await Comp.findById({ _id: req.params.id });
        console.log(comp);
        comp.likes = comp.likes + 1;
        await comp.save();
        res.status(200).json(comp);
    } catch (error) {
        console.log(error)
    }

}

module.exports = { createComp, getComps, updateComp, deleteComp, likeComp }