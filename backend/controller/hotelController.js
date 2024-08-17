import Hotel from "../models/hotelModel.js";

export const create = async (req, res) => {
    try {
        const { name, address, location, price } = req.body;

        const hotel = await Hotel.findOne({ name })

        if (hotel) {
            return res.status(400).json({ error: "hotel already exist" });
        }

        const newHotel = new Hotel(
            req.body
        )

        if (newHotel) {
            await newHotel.save();

            res.status(201).json({
                _id: newHotel._id,
                name: newHotel.name,
                location: newHotel.location
            })
        } else {
            res.status(400).json({ error: "invalid data" });

        }


    } catch (error) {
        console.log("error in Hotel Controller: ", error.message)
        res.status(500).json({ error: "Internal server error" });
    }
}

export const allHotel = async (req, res) => {
    const allHotel = await Hotel.find()
    res.status(200).json({allHotel})
}