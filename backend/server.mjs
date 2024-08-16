import express from "express";
import dotenv from 'dotenv';
import connectToMongo from "./db/connectToMongo.js"; // Import only
import travelingRoutes from "./Routes/travellingRoutes.js";
import hotelRoutes from "./Routes/hotelRoutes.js"; // Ensure the file name is correct
import cors from 'cors';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

// Set up routes
app.use("/api/hotel", hotelRoutes);
app.use("/api/traveling", travelingRoutes);

// Start server and connect to MongoDB
app.listen(PORT, () => {
  connectToMongo(); // Use the imported function
  console.log(`Server running at http://localhost:${PORT}`);
});
