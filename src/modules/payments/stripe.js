// THIS IS TEST ONLY MODULE ------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createProduct = async (options) => {
  try {
    const product = await stripe.products.create({
      name: options.product.name,
      description: options.product.description,
      image: options.product.image,
    });

    console.log(product);
  } catch (err) {
    console.log("createProduct():", err.message);
    console.log(err);
  }
};

export const createPrice = async (options) => {
  try {
    const price = await stripe.prices.create({
      product: options.product.id,
      unit_amount: options.product.price,
      currency: options.currency,
    });

    console.log(price);
  } catch (err) {
    console.log("createPrice():", err.message);
    console.log(err);
  }
};

export const createPrebuildCheckoutPage = async (options) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: options.items,
      mode: "payment",
      success_url: options.successUrl,
      cancel_url: options.cancelUrl,
    });

    return session.url;
  } catch (err) {
    console.log("createPrebuildCheckoutPage():", err.message);
    console.log(err);
  }
};
