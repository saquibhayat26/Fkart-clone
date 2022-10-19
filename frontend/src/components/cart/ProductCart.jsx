import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import CartFooter from "./CartFooter";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import {
  getCartProducts,
  removeFromCart,
  removeFromCartQuantity,
} from "../../redux/features/cartSlice";

import { Link, useNavigate } from "react-router-dom";
import TotalView from "./TotalView";
import PayButton from "../buttons/PayButton";

const ProductCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartData } = useSelector((state) => state.cart);
  const { username, firstname } = useSelector((state) => state.user);

  const [myCartData, setMyCartData] = useState([]);
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    setMyCartData(cartData);
    username && setSignIn(false);
  }, [cartData, username]);

  const handleIncrease = (id) => {
    dispatch(getCartProducts(id));
  };
  const handleDecrease = (id) => {
    dispatch(removeFromCartQuantity(id));
  };
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleOrder = () => {
    setSignIn(true);
    username && navigate("/stripe-payment");
    setTimeout(() => {
      setSignIn(false);
    }, 1000);
  };

  const date = new Date(
    new Date().getTime() + 5 * 24 * 60 * 60 * 1000
  ).toDateString();

  return (
    <MainContainer>
      <TopContainer>
        <TopLeft>
          <AddressContainer>
            {username && (
              <>
                <AdLeft>
                  <AdType>
                    <Box
                      variant="span"
                      style={{ fontSize: 14, marginRight: 4 }}
                    >
                      Deliver to:
                    </Box>
                    <Box
                      variant="span"
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        marginRight: 12,
                      }}
                    >
                      {firstname}, 123456&nbsp;
                    </Box>
                    <Box
                      variant="span"
                      style={{ fontSize: 10, color: "#717478" }}
                    >
                      HOME
                    </Box>
                  </AdType>
                  <Address>
                    <Typography style={{ fontSize: 12 }}>
                      Cross Road 12, Dalal Street, Navi Mumbai, Maharashtra
                    </Typography>
                  </Address>
                </AdLeft>
                <AdRight>
                  <AdButton>Change</AdButton>
                </AdRight>
              </>
            )}
          </AddressContainer>

          {myCartData.map((data, index) => (
            <ProductMainWrapper key={index}>
              <ProductContainer>
                <ProductImageContainer>
                  <Image src={data.url} alt="" />
                </ProductImageContainer>
                <ProductInfoContainer>
                  <Link
                    to={`/product/${data.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      style={{
                        fontSize: 15,
                        marginBottom: "0.6rem",
                      }}
                    >
                      {data.title.longTitle}
                    </Typography>
                  </Link>
                  <Box
                    variant="span"
                    style={{ fontSize: 13, color: "#717478" }}
                  >
                    {data.title.shortTitle}
                  </Box>

                  <ProductPriceContainer variant="span">
                    <strike>₹{data.price.mrp}</strike>
                    <ProductPrice variant="span">
                      ₹{data.price.cost}
                    </ProductPrice>
                    <Box
                      variant="span"
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#5ab132",
                      }}
                    >
                      {data.price.discount} off
                    </Box>
                  </ProductPriceContainer>
                </ProductInfoContainer>
                <ProductDeliveryContainer>
                  <Typography>
                    Delivery by {date} |{" "}
                    <Box component="span">
                      {" "}
                      Free <strike style={{ color: "#000" }}>₹40</strike>
                    </Box>
                  </Typography>
                </ProductDeliveryContainer>
              </ProductContainer>
              <ProductQuantityContainer>
                <ProductQuantity>
                  {data.quantity > 1 ? (
                    <Minus
                      component="span"
                      onClick={() => handleDecrease(data._id)}
                    >
                      -
                    </Minus>
                  ) : (
                    <FadeMinus component="span">-</FadeMinus>
                  )}{" "}
                  <InputContainer size="small">{data.quantity}</InputContainer>
                  <Plus
                    component="span"
                    onClick={() => handleIncrease(data.id)}
                  >
                    +
                  </Plus>
                </ProductQuantity>

                <Button1>save for later</Button1>

                <Button2 onClick={() => handleRemove(data._id)}>Remove</Button2>
              </ProductQuantityContainer>
            </ProductMainWrapper>
          ))}

          <OrderButtonContainer>
            <OrderButton onClick={handleOrder}>
              <PayButton
                cartData={myCartData}
                content={"PLACE ORDER"}
                backgroundColor={"#FB641B"}
              />
            </OrderButton>
          </OrderButtonContainer>
          {signIn && (
            <Box component="span" style={{ color: "red" }}>
              please sign-in first
            </Box>
          )}
        </TopLeft>

        <TopRight>
          <TopRightWrapper>
            <TotalView />
          </TopRightWrapper>
        </TopRight>
      </TopContainer>
      <BottomContainer>
        <CartFooter />
      </BottomContainer>
    </MainContainer>
  );
};

export default ProductCart;

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopContainer = styled(Box)`
  display: flex;
`;

const TopLeft = styled(Box)`
  flex: 6.5;
  border-color: lightgray;
  border-style: solid;
  border-width: 0 1px 1px 1px;
  margin: 3rem;
  padding: 1rem;
`;

const AddressContainer = styled(Box)`
  display: flex;
  margin-bottom: 2rem;
`;

const AdLeft = styled(Box)`
  flex: 8;
`;

const AdType = styled(Box)`
  display: flex;
  align-items: center;
`;

const Address = styled(Box)`
  color: #717478;
  margin-top: 0.8rem;
`;

const AdRight = styled(Box)`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  padding: 6px 2px;
`;

const AdButton = styled(Button)`
  border: 1px solid #e2dbdb;
  text-transform: none;
  padding: 0rem 1rem;
  font-weight: 500;
  color: #2874f0;
`;

const ProductContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const ProductMainWrapper = styled(Box)`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductImageContainer = styled(Box)`
  flex: 2;
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  width: "6rem",
});

const ProductInfoContainer = styled(Box)`
  flex: 5;
  padding-right: 2rem;
`;

const ProductPriceContainer = styled(Box)`
  display: flex;
  align-items: center;
  color: #717478;
  margin-top: 1rem;
`;

const ProductPrice = styled(Box)`
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  font-size: 1.3rem;
  color: #242222;
  font-weight: 600;
`;

const ProductDeliveryContainer = styled("Box")({
  flex: 3,
  "& *": {
    fontSize: 13,
  },
  "& span": {
    color: "#37ac3c ",
  },
});

const ProductQuantityContainer = styled(Box)`
  display: flex;
  padding-top: 1rem;
`;

const ProductQuantity = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 8rem;
  margin-right: 0.8rem;
`;

const Plus = styled(Box)`
  border: 1px solid #acaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
`;
const Minus = styled(Box)`
  border: 1px solid #acaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  padding-bottom: 4px;
`;

const FadeMinus = styled(Box)`
  border: 1px solid #d8d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
`;

const InputContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 1.8rem;
  border: 1px solid #acaaaa;
  border-radius: 4px;
`;

const Button1 = styled("Button")({
  fontSize: 15,
  color: "#444343",
  textTransform: "uppercase",
  fontWeight: 600,
  marginRight: "1.5rem",
  cursor: "pointer",
  border: "none",
  " &:hover": {
    color: "#2874F0",
  },
});

const Button2 = styled("Button")({
  fontSize: 15,
  color: "#444343",
  textTransform: "uppercase",
  fontWeight: 600,
  marginRight: "1.5rem",
  cursor: "pointer",
  border: "none",
  " &:hover": {
    color: "#2874F0",
  },
});

const OrderButtonContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  bottom: 0;
  height: 5rem;
  background-color: #fff;
`;

const OrderButton = styled(Box)({
  width: "15rem",
  borderRadius: 0,
  marginBottom: 14,
  marginTop: 15,
  fontWeight: 600,
});

const TopRight = styled(Box)`
  flex: 3.5;
  margin: 3rem;
  margin-left: -2rem;
`;

const TopRightWrapper = styled(Box)`
  position: sticky;
  top: 5rem;
`;

const BottomContainer = styled(Box)`
  padding: 1rem 3rem 1rem 6rem;
`;
