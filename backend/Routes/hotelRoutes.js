import express from "express";
import { create, allHotel } from "../controller/hotelController.js";

const router = express.Router()
router.post('/insert',create);
router.get('/',allHotel)
export default router