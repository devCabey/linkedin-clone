import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const connect = async () => {
	try {
		mongoose.set({ strictQuery: true });
		const db = await mongoose.connect(process.env.DATABASE_URL);
		console.log('Database connection successful');
		return db;
	} catch (error) {
		throw new Error('Unable to connect to database');
	}
};
