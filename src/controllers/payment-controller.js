import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const addPaymentGateway = async (req, res) => {
  const amount = req.body.price;

  // let

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "Your Cart Amount",
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "/checkout-success",
    cancel_url: "/checkout-failed",
  });

  // res.redirect(303, session.url);
  res.json({ url: session.url });
};

// import { createPrebuildCheckoutPage } from "../modules/payments/stripe.js";

// export const stripePrebuildCheckout = async (req, res) => {
//   // const { items } = req.body;
//   const items = [
//     {
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: "T-shirt",
//         },
//         unit_amount: 2000,
//       },
//       quantity: 1,
//     },
//     {
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: "Pant",
//         },
//         unit_amount: 1000,
//       },
//       quantity: 1,
//     },
//   ];

//   try {
//     const redirectUrl = await createPrebuildCheckoutPage({
//       items: items,
//       cancelUrl: `${process.env.CLIENT_URL}/checkout/cancel`,
//       successUrl: `${process.env.CLIENT_URL}/checkout/success`,
//     });

//     res.redirect(redirectUrl);
//   } catch (err) {
//     console.log("stripePrebuildCheckout():", err.message);
//     console.log(err);
//   }
// };
