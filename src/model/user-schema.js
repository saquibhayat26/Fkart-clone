import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // we give id an object key to verify the duplication which is done for the uniqueness of the individual products
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 12,
  },
});

const User = mongoose.model("user", UserSchema);

export default User;
