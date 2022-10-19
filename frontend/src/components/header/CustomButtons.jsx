import { useState } from "react";
import { useSelector } from "react-redux";

import { Box, styled, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DialogBox from "../LoginSignupDialog/Dialog";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CustomButtons = () => {
  const [ToggleDialog, setToggleDialog] = useState(false);

  const [userLoginName, setUserLoginName] = useState(null);

  const { user } = useSelector((state) => state);

  const { cartData } = useSelector((state) => state.cart);

  const [myCartData, setMyCartData] = useState([]);

  function handleToggleDialog() {
    setToggleDialog(true);
  }

  useEffect(() => {
    setMyCartData(cartData);
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    if (loginData) {
      console.log(loginData.firstname);
      setUserLoginName(loginData.firstname);
    } else {
      setUserLoginName(null);
    }
  }, [cartData, user]);

  return (
    <CustomButtonsContainer>
      {userLoginName ? (
        <Profile firstname={userLoginName} />
      ) : (
        <LoginButton onClick={handleToggleDialog}>Login</LoginButton>
      )}

      <Seller>Become a Seller</Seller>
      <MoreContainer>
        <Typography style={{ fontSize: 14, fontWeight: 600 }}>More</Typography>
        <DownArrow />
      </MoreContainer>
      <Link to={"/cart"} style={{ textDecoration: "none", color: "inherit" }}>
        <CartContainer>
          {myCartData.length > 0 && (
            <CartLength> {myCartData.length}</CartLength>
          )}
          <ShoppingCart />
          <Typography style={{ fontSize: 14, fontWeight: 600 }}>
            Cart
          </Typography>
        </CartContainer>
      </Link>
      <DialogBox
        ToggleDialog={ToggleDialog}
        setToggleDialog={setToggleDialog}
      />
    </CustomButtonsContainer>
  );
};

export default CustomButtons;

////////------CSS PART-------/////////

const CustomButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  " & > *": {
    marginRight: "44px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  textTransform: "none",
  fontWeight: "600",
  padding: "2px 40px",
  borderRadius: "0",
  color: "#2874f0",
  "&:hover": {
    backgroundColor: "white",
    color: "#2874f0",
  },
  [theme.breakpoints.down("md")]: {
    color: "#262424",
    fontSize: "1rem",
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid black",
    marginBottom: "0.8rem",
    width: "100%",
  },
}));

const Seller = styled(Typography)(({ theme }) => ({
  margin: "0 2rem",
  minWidth: "7rem",
  fontSize: "14px",
  fontWeight: "600",
  flexWrap: "no-wrap",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    display: "flex",
    fontWeight: "500",
    justifyContent: "center",
    borderBottom: "1px solid",
    marginBottom: "0.8rem",
    minWidth: "100%",
  },
}));

const MoreContainer = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    borderBottom: "1px solid",
    marginBottom: "0.8rem",
    minWidth: "100%",
  },
}));

const CartContainer = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    fontSize: "1rem",
    marginLeft: "1.9rem",
  },
}));

const DownArrow = styled(KeyboardArrowDownIcon)`
  width: 16px;
  margin-left: 2px;
`;
const ShoppingCart = styled(ShoppingCartIcon)`
  width: 20px;
  margin-right: 6px;
`;

const CartLength = styled(Box)`
  border: 1px solid;
  background-color: #ff6161;
  width: 18px;
  height: 18px;
  border-radius: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: 5px;
  margin-bottom: 24px;
`;
