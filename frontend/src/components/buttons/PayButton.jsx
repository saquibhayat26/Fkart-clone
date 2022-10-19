import React from "react";

import { styled, Box, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const PayButton = ({ content, backgroundColor, cartData, currentCartData }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setBgColor(backgroundColor);
  }, [backgroundColor, cartData, currentCartData]);

  return (
    <Box>
      <Btn bgcolor={bgColor}>{content}</Btn>
    </Box>
  );
};

export default PayButton;

const Btn = styled(Button)`
  color: #fff;
  border-radius: 0;
  width: 100%;
  font-size: 0.95rem;
  font-weight: 600;
  height: 3rem;
  background-color: ${(props) => props.bgcolor};
  &:hover {
    background-color: ${(props) => props.bgcolor};
  }
`;
