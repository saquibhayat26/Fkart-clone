import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TotalView from "../cart/TotalView";

const StripePayment = () => {
  const { price } = useSelector((state) => state.total);
  const [product] = useState();

  const makePayment = async () => {
    const URL = "";

    const body = {
      price,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const res = await fetch(`${URL}/payment/stripe/checkout`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <MainWrapper>
      <Box>
        <TotalView />
      </Box>
      <ButtonMainWrapper>
        <ButtonWrap>
          <Button onClick={makePayment} variant="contained">
            PAY
          </Button>
        </ButtonWrap>

        <ButtonWrap>
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <Button variant="contained">CANCEL</Button>
          </Link>
        </ButtonWrap>
      </ButtonMainWrapper>
    </MainWrapper>
  );
};

export default StripePayment;

const MainWrapper = styled(Box)`
  padding: 3rem 5rem;
`;

const ButtonMainWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
`;

const ButtonWrap = styled(Box)`
  margin-right: 1rem;
`;
