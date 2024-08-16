import mongoose from "mongoose";

const travelingSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['Bus', 'Train', 'Flight', 'Taxi'],
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    departure: {
        location: {
            type: String,
            required: true
        },
        dateTime: {
            type: Date,
            required: true
        }
    },
    arrival: {
        location: {
            type: String,
            required: true
        },
        dateTime: {
            type: Date,
            required: true
        }
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number, // Duration in minutes
        required: true
    },
    contactInfo: {
        phoneNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
});

const Traveling = mongoose.model('Traveling',travelingSchema);
export default Traveling