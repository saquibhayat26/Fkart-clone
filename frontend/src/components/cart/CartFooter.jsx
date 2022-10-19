import { Box, styled } from "@mui/material";
import React from "react";

const CartFooter = () => {
  return (
    <MainContainer>
      <LeftBox>
        <LeftBox1 variant="span">
          <Box variant="span" style={{ fontSize: 14, marginRight: 4 }}>
            Policies:
          </Box>
          <Box variant="span" style={{ fontSize: 14 }}>
            <Link href="#">Returns Policy | </Link>
            <Link href="#">Terms of use | </Link>
            <Link href="#">Security | </Link>
            <Link href="#">Privacy | </Link>
            <Link href="#">Infringement</Link>
          </Box>
        </LeftBox1>
        <LeftBox2 variant="span">
          <Box variant="span" style={{ fontSize: 14 }}>
            © 2007-2022{" "}
          </Box>
          &nbsp;
          <Box variant="span" style={{ fontSize: 14 }}>
            Flipkart.com
          </Box>
        </LeftBox2>
      </LeftBox>
      <RightBox>
        <Box variant="span" style={{ fontSize: 14 }}>
          Need help?&nbsp;
        </Box>
        <Box variant="span" style={{ fontSize: 14 }}>
          Visit the&nbsp;
        </Box>{" "}
        <Box variant="span" style={{ fontSize: 14, color: "#0055FF" }}>
          <a>Help Center&nbsp; </a>
        </Box>
        <Box variant="span" style={{ fontSize: 14 }}>
          or&nbsp;
        </Box>
        <Box variant="span" style={{ fontSize: 14, color: "#0055FF" }}>
          <a>Contact Us</a>
        </Box>
      </RightBox>
    </MainContainer>
  );
};

export default CartFooter;

const MainContainer = styled(Box)`
  display: flex;
  width: 100%;
`;

const LeftBox = styled(Box)`
  flex: 7;
  display: flex;
  color: #565656;
`;

const LeftBox1 = styled(Box)`
  display: flex;
  margin-right: 2rem;
`;

const Link = styled("a")({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: "blue",
  },
});

const LeftBox2 = styled(Box)`
  display: flex;
  word-wrap: break-word;
`;

const RightBox = styled(Box)`
  padding-left: 2rem;
  flex: 3;
  display: flex;
  color: #565656;
`;
