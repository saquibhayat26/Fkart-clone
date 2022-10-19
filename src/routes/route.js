import express from "express";

import { userSignUp, userLogin } from "../controllers/user-controller.js";
import {
  getProductById,
  getProducts,
} from "../controllers/product-controller.js";

import {
  addPaymentGateway,
  // stripePrebuildCheckout,
} from "../controllers/payment-controller.js";

const Router = express.Router();

Router.post("/signup", userSignUp);
Router.post("/login", userLogin);

Router.get("/products", getProducts);
Router.get("/product/:id", getProductById);

// Router.get("/payments/checkout/stripe/prebuild", stripePrebuildCheckout);

// Router.post("/payment", addPaymentGateway);
Router.post("/payment/stripe/checkout", addPaymentGateway);
// Router.post("/callback", paymentResponse);

export default Router;
