import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 48px",
  padding: "12px",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    overflow: "auto",
    whiteSpace: "nowrap",
  },
}));

const SingleProductBox = styled(Box)`
  cursor: pointer;
  margin: 0rem 1rem;
  &:hover {
    color: #2874f0;
  }
`;

const SingleProductText = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  flex-wrap: nowrap;
`;

const BottomLine = styled(Box)`
  border-bottom: 1px solid lightgray;
`;

const NavBar = () => {
  return (
    <Box>
      <Wrapper>
        {navData.map((data, index) => (
          <SingleProductBox key={index}>
            <img src={data.url} alt="" style={{ width: 64 }} />
            <SingleProductText>{data.text}</SingleProductText>
          </SingleProductBox>
        ))}
      </Wrapper>
      <BottomLine />
    </Box>
  );
};

export default NavBar;
