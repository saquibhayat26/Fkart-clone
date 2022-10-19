import React from "react";
import ProductSlide from "./ProductSlide";
import { styled, Box } from "@mui/material";

const MidSlide = ({ slideProductData, slideProductStatus, title, timer }) => {
  const imgUrl =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Container>
      <LeftComponent>
        <ProductSlide
          slideProductData={slideProductData}
          slideProductStatus={slideProductStatus}
          title={title}
          timer={timer}
        />
      </LeftComponent>
      <RightComponent>
        <Image src={imgUrl} alt="" />
      </RightComponent>
    </Container>
  );
};

export default MidSlide;

const Container = styled(Box)`
  display: flex;
  align-items: center;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Image = styled("img")({
  width: "100%",
});
