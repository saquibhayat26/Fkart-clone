import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCartProducts } from "../../redux/features/cartSlice";
import { getProductDetails } from "../../redux/features/productDetailSlice";
import PayButton from "../buttons/PayButton";
import ProductDetail from "./ProductDetail";

const DetailsView = () => {
  const navigate = useNavigate();
  const { myData } = useSelector((state) => state.productDetail);
  const { cartData } = useSelector((state) => state.cart);
  const { username } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { id } = useParams();

  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    if (!myData || id !== myData.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, myData]);

  const handleAdd = () => {
    dispatch(getCartProducts(id));
    navigate("/cart");
  };

  useEffect(() => {
    username && setSignIn(false);
  }, [cartData, dispatch, username]);

  const handleBuyNow = () => {
    dispatch(getCartProducts(id));
    setSignIn(true);
    username && navigate("/stripe-payment");
    setTimeout(() => {
      setSignIn(false);
    }, 1000);
  };

  return (
    <>
      {" "}
      {myData && (
        <Component>
          <Left>
            <Box>
              <Image src={myData.detailUrl} alt="" />
            </Box>
            <ButtonContainer>
              <MyButton onClick={handleAdd}>
                <PayButton
                  content={"ADD TO CART"}
                  backgroundColor={"#FF9F00"}
                />
              </MyButton>
              <MyButton onClick={handleBuyNow}>
                <PayButton
                  currentCartData={myData}
                  content={"BUY NOW"}
                  backgroundColor={"#FB641B"}
                />
              </MyButton>
            </ButtonContainer>
            {signIn && (
              <Box component="span" style={{ color: "red" }}>
                please sign-in first
              </Box>
            )}
          </Left>

          <Right>
            <ProductDetail myData={myData} />
          </Right>
        </Component>
      )}
    </>
  );
};

export default DetailsView;

const Component = styled(Box)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down(750)]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const Left = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down(450)]: {
    width: "100",
    margin: "auto",
  },
}));

const Image = styled("img")({
  padding: "2.9rem",
  width: "100%",
});

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 3.35rem;
`;

const MyButton = styled(Box)`
  border-radius: 0;
  width: 48%;
  font-size: 0.95rem;
  font-weight: 600;
  height: 100%;
  background-color: ${(props) => props.bgcolor};
  &:hover {
    background-color: ${(props) => props.bgcolor};
  }
`;

const Right = styled(Box)`
  min-width: 60%;
  padding: 1rem;
`;
