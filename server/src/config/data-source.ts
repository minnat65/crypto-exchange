import mongoose from 'mongoose';

const connect = async () => {
  console.log('Connecting to DB.....')
  if(!process.env.DBURL) {
    throw new Error('DB URL is required.');
  }

  await mongoose.connect(process.env.DBURL!);
}

export  { connect as mongoConnection };