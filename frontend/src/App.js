import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DetailsView from "./components/details/DetailsView";

import { Box } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";

import StripePayment from "./components/payment/StripePayment";
import CheckoutSuccess from "./components/checkout/CheckoutSuccess";
import CheckoutCancel from "./components/checkout/CheckoutCancel";

function App() {
  return (
    <div className="App">
      <Box style={{ marginTop: 55 }}>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              path="/product/:id"
              element={
                <>
                  <DetailsView />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Cart />
                </>
              }
            />{" "}
            <Route path="/stripe-payment" element={<StripePayment />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/checkout-failed" element={<CheckoutCancel />} />
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
