import express from "express";
import { createTransportation, getAllTransportations, getTransportationById, } from "../controller/travelingController.js";

const router = express.Router()

router.post('/post',createTransportation);

router.get('/',getAllTransportations);
router.get('/:id', getTransportationById);
export default router