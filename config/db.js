import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if (connected) {
        console.log('MongoDb is already connected...');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;

        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err);
    }
};

export default connectDB;
