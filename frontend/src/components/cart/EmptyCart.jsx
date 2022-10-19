import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CartFooter from "./CartFooter";

const EmptyCart = () => {
  const URL =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <>
      <TopContainer>
        <Image src={URL} alt="cart-image" />
        <Typography style={{ marginBottom: "0.5rem", fontSize: 18 }}>
          Your cart is empty!
        </Typography>
        <Typography style={{ fontSize: 11.5, marginBottom: "1.5rem" }}>
          Add items to it now.
        </Typography>
        <ButtonContainer to={"/"}>
          <Button
            variant="contained"
            style={{
              borderRadius: 2,
              textTransform: "none",
              width: "100%",
              height: "2.5rem",
              fontSize: 13,
            }}
          >
            Shop now
          </Button>
        </ButtonContainer>
      </TopContainer>

      <Line> </Line>

      <BottomContainer>
        <CartFooter />
      </BottomContainer>
    </>
  );
};

export default EmptyCart;

const TopContainer = styled(Box)`
  margin: auto;
  margin-top: 7rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 14rem;
`;

const Image = styled("img")({
  width: "100%",
  marginBottom: "1.5rem",
});

const ButtonContainer = styled(Link)`
  text-decoration: none;
  width: 90%;
  height: 2rem;
`;

const Line = styled(Box)`
  color: lightgray;
  border-bottom: 1px solid;
  width: 92%;
  margin: auto;
  margin-bottom: 2rem;
`;

const BottomContainer = styled(Box)`
  display: flex;
  width: 100%;
  border-top: 1px solid #dbdada;
  padding: 2rem 5.6rem;
`;
