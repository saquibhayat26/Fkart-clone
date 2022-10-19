import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  // we give id an object key to verify the duplication which is done for the uniqueness of the individual products
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Product = mongoose.model("product", ProductSchema);

export default Product;
