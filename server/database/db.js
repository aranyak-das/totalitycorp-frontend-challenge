import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce-web.99hvopu.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Yaay! Connection with database successfull.");
  } catch (error) {
    console.log("Oops! Error connecting to database", error.message);
  }
};

export default Connection;
