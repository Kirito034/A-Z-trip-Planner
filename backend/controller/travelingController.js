import Traveling from "../models/travellingModel.js";

export const createTransportation = async (req, res) => {
    try {
        const transportation = new Traveling(req.body);
        await transportation.save();
        res.status(201).json(transportation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getAllTransportations = async (req, res) => {
    try {
        const transportations = await Traveling.find();
        res.status(200).json(transportations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTransportationById = async (req, res) => {
    try {
        const transportation = await Traveling.findById(req.params.id);
        if (!transportation) {
            return res.status(404).json({ message: 'Transportation not found' });
        }
        res.status(200).json(transportation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};