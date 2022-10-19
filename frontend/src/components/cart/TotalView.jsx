import React from "react";
import { Box, styled, Typography } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { payTotal } from "../../redux/features/totalSlice";

const TotalView = () => {
  const dispatch = useDispatch();

  const { cartData } = useSelector((state) => state.cart);

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let price = 0;
    let discount = 0;
    let total = 0;

    cartData.forEach((item) => {
      if (item.quantity === 1) {
        price += item.price.mrp;
        discount += item.price.mrp - item.price.cost;
        total += item.price.cost;
      } else {
        price += item.price.mrp * item.quantity;
        discount += (item.price.mrp - item.price.cost) * item.quantity;
        total += item.price.cost * item.quantity;
      }
    });

    setPrice(price);
    setDiscount(discount);
    setTotal(total);
    total === 0 ? dispatch(payTotal(0)) : dispatch(payTotal(total));
  };

  useEffect(() => {
    calculateTotal();
  }, [cartData, total]);

  return (
    <>
      <PriceContainer>
        <Box style={{ marginBottom: "2rem" }}>
          <Typography
            style={{
              fontSize: "1rem",
              color: "#717478",
              fontWeight: 600,
            }}
          >
            PRICE DETAILS
          </Typography>
        </Box>
        <PriceDetails>
          <Box>Price ({cartData.length} items)</Box>
          <Box>₹{price}</Box>
        </PriceDetails>
        <PriceDetails>
          <Box>Discount</Box>
          <Box style={{ color: "#36ad1e" }}>−₹{discount}</Box>
        </PriceDetails>
        <PriceDetails>
          <Box>Delivery Charges</Box>
          <Box style={{ color: "#36ad1e" }}>FREE</Box>
        </PriceDetails>
        <PriceDetails
          style={{
            fontSize: "1.2rem",
            color: "#201f1f",
            fontWeight: 600,
            marginBottom: "2rem",
          }}
        >
          <Box>Total Amount</Box>
          <Box>₹{total}</Box>
        </PriceDetails>
        <Box>
          <Typography
            style={{ color: "#36ad1e", fontWeight: 600, fontSize: 14 }}
          >
            You will save ₹{discount} on this order
          </Typography>
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Typography style={{ fontSize: 14 }}>
            Save extra ₹14 using 14 SuperCoins on the next step
          </Typography>
        </Box>
      </PriceContainer>
      <Line></Line>
      <VerifiedContainer>
        <Box style={{ marginRight: 10 }}>
          <VerifiedUserIcon />
        </Box>
        <Box>
          <Typography style={{ marginleft: 8, fontSize: 14, fontWeight: 600 }}>
            Safe and Secure Payments.Easy returns.100% Authentic products.
          </Typography>
        </Box>
      </VerifiedContainer>
    </>
  );
};

export default TotalView;

const PriceContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;
`;

const PriceDetails = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Line = styled(Box)`
  border-bottom: 1px solid lightgray;
  margin-top: 2rem;
`;

const VerifiedContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #717478;
  padding-left: 1rem;
  margin-top: 2rem;
`;
