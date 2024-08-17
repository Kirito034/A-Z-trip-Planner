import mongoose from 'mongoose';

const connectToMongo = async () => {
  console.log("Attempting to connect to MongoDB..."); // New log for connection start

  try {
    // const conn = await mongoose.connect(process.env.MONGO_DB_URL); // Connecting to MongoDB
    const conn = await mongoose.connect("mongodb+srv://Amanpreet34:amanossan1@cluster0.iggczbb.mongodb.net/A2Z?retryWrites=true&w=majority&appName=Cluster0"); // Connecting to MongoDB
    console.log(`MongoDB connected successfully to host: ${conn.connection.host}`); // Log the host if connected
  } catch (error) {
    console.error('MongoDB connection error:', error.message); // Log only the error message
    process.exit(1);
  }
};

export default connectToMongo;
