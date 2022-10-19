import React from "react";
import { styled, Box } from "@mui/material";

const MidSection = ({ links }) => {
  return (
    <MidContainer>
      {links.map((image, index) => (
        <Image src={image} alt="" key={index} />
      ))}
    </MidContainer>
  );
};

export default MidSection;

const MidContainer = styled(Box)`
  display: flex;
  width: 100%;
`;

const Image = styled("img")({
  width: "33%",
  cursor: "pointer",
});
