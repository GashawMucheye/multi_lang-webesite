import { connect } from 'mongoose';
import { config } from 'dotenv';
config();
const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGODB_URI);
    console.log(`mongoDB connected : ${conn.connection.host}`.blue.bold);
  } catch (error) {
    console.log(error);
    //stop process
    process.exit(1);
  }
};

export default connectDB;
