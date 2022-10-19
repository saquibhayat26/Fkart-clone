import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CheckoutCancel = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <Box>
      <Typography>
        Forgot to add something to your cart? Shop around then come back to pay!
      </Typography>
      <Button variant="contained" onClick={handleBack}>
        Go Back
      </Button>
    </Box>
  );
};

export default CheckoutCancel;
