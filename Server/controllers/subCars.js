const SubCar = require('../models/subCar');

const createCar = async (req, res) => {
    try {
        const subCar = new SubCar(req.body);
        await subCar.save();
        res.status(201).json(subCar);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getCars = async (req, res) => {
    try {
        const subCar = await SubCar.find();
        res.status(200).json(subCar);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const updateCar = async (req, res) => {
    try {
        const keys = Object.keys(req.body);
        const subCar = await SubCar.findById({ _id: req.params.id });
        keys.forEach(update => subCar[update] = req.body[update]);
        await subCar.save();
        res.status(200).json(subCar);
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteCar = async (req, res) => {
    try {
        await SubCar.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ message: 'Post was deleted' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const likeCar = async (req, res) => {
    try {
        console.log(res.params);
        const subCar = await SubCar.findById({ _id: req.params.id });
        console.log(subCar);
        subCar.likes = subCar.likes + 1;
        await subCar.save();
        res.status(200).json(subCar);
    } catch (error) {
        console.log(error)
    }

}

module.exports = { createCar, getCars, updateCar, deleteCar, likeCar }