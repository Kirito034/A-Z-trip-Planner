import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    amenities: [{
        type: String
    }],
    roomTypes: [{
        type: String
    }],
    pricePerNight: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    reviews: [{
        user: {
            type: "String",
            // ref: 'User',
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel

