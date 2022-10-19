import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log(`data imported successfully`);
  } catch (error) {
    console.log(`porduct is not loaded and the error is: ${error.message}`);
  }
};
export default DefaultData;
