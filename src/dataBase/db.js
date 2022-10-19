import mongoose from "mongoose";

export const Connection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database is running successfully");
  } catch (err) {
    console.log(`error while fetching the data ${err.message}`);
  }
};

export default Connection;
