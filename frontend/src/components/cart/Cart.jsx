import React from "react";
import EmptyCart from "./EmptyCart";
import Header from "../header/Header";
import { Box } from "@mui/material";
import ProductCart from "./ProductCart";

import { useSelector } from "react-redux";

const Cart = () => {
  const { cartData } = useSelector((state) => state.cart);

  return (
    <Box>
      <Header />
      {cartData.length > 0 ? <ProductCart /> : <EmptyCart />}
    </Box>
  );
};

export default Cart;
