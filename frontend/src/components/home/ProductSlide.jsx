import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import Countdown from "react-countdown";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

import { styled, Box, Typography, Button, Divider } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 3,
  },
};

const ProductSlide = ({
  slideProductData,
  slideProductStatus,
  title,
  timer,
}) => {
  const [homeProduct, setHomeProduct] = useState();

  useEffect(() => {
    setHomeProduct(slideProductData);
  }, [slideProductData]);

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} left
      </Box>
    );
  };

  return (
    <div>
      {homeProduct && (
        <>
          {" "}
          <TitleContainer>
            <DealText>{title}</DealText>
            {timer && (
              <Timer>
                <TimerOutlinedIcon />
                <Countdown date={Date.now() + 4.32e7} renderer={renderer} />
              </Timer>
            )}
            <Dealbutton variant="contained">view All</Dealbutton>
          </TitleContainer>
          <Divider />
          <Carousel
            raggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {homeProduct.map((data, id) => (
              <Container key={id} to={`/product/${data.id}`}>
                <ImageContainer>
                  <Image src={data.detailUrl} alt="" />
                </ImageContainer>
                <div>
                  <Title>{data.title.shortTitle}</Title>
                </div>
                <div>
                  <Discount>{data.discount}</Discount>
                </div>
                <div>
                  <TagLine>{data.tagline}</TagLine>
                </div>
              </Container>
            ))}
          </Carousel>
        </>
      )}
    </div>
  );
};

export default ProductSlide;

const TitleContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  padding: 1rem;
`;

const Container = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-decoration: none;
  color: inherit;
`;

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease;
  &:hover {
    scale: 1.06;
  }
`;

const Image = styled("img")({
  width: "80%",
  height: "12rem",
  objectFit: "contain",
  // border: "1px solid",
});

const Title = styled(Typography)`
  font-size: 0.85rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Discount = styled(Typography)`
  font-size: 0.95rem;
  color: green;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const TagLine = styled(Typography)`
  font-size: 0.75rem;
  color: #918888;
`;

const Timer = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 3rem;
  color: #7f7f7f;
`;

const DealText = styled(Typography)`
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 2rem;
`;

const Dealbutton = styled(Button)`
  font-size: 0.8rem;
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-weight: 600;
`;
