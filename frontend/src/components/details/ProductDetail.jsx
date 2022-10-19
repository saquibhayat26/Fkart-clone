import React from "react";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SellIcon from "@mui/icons-material/Sell";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import { Box, styled, Typography } from "@mui/material";

import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const tagsStyle = {
  width: 18,
  aspectRatio: "auto 18 / 18",
  height: 18,
  color: "#14BA46",
  marginTop: 2,
  marginRight: 8,
};

const ProductDetail = ({ myData }) => {
  const [readMore, setReadMore] = useState(false);

  const linkName = readMore ? "Show Less Offers << " : "Show More Offers >> ";

  const extraContent = (
    <>
      <OfferDetail>
        <SellIcon style={tagsStyle} />

        <TagLine>
          Bank Offer 10% off on HDFC Bank Credit and Debit Card Full Swipe
          Trxns, up to ₹500. On orders of ₹5,000 and above{" "}
          <Box component="span">T&C</Box>
        </TagLine>
      </OfferDetail>
      <OfferDetail>
        <SellIcon style={tagsStyle} />

        <TagLine>
          Bank Offer 10% off on HDFC Bank Credit and Debit Card Full Swipe
          Trxns, up to ₹500. On orders of ₹5,000 and above{" "}
          <Box component="span">T&C</Box>
        </TagLine>
      </OfferDetail>
      <OfferDetail>
        <SellIcon style={tagsStyle} />

        <TagLine>
          Bank Offer 10% off on HDFC Bank Credit and Debit Card Full Swipe
          Trxns, up to ₹500. On orders of ₹5,000 and above{" "}
          <Box component="span">T&C</Box>
        </TagLine>
      </OfferDetail>
      <OfferDetail>
        <SellIcon style={tagsStyle} />

        <TagLine>
          Bank Offer 10% off on HDFC Bank Credit and Debit Card Full Swipe
          Trxns, up to ₹500. On orders of ₹5,000 and above{" "}
          <Box component="span">T&C</Box>
        </TagLine>
      </OfferDetail>
      <OfferDetail>
        {" "}
        <SellIcon style={tagsStyle} />
        <TagLine>
          {" "}
          Special PriceGet extra ₹2401 off (price inclusive of cashback/coupon){" "}
          <Box component="span">T&C</Box>
        </TagLine>
      </OfferDetail>
    </>
  );

  const date = new Date(
    new Date().getTime() + 5 * 24 * 60 * 60 * 1000
  ).toDateString();

  const imageURL =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
  const coinsURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  return (
    <>
      <Typography style={{ fontSize: 18 }}>{myData.title.longTitle}</Typography>
      <RatingContainer>
        <RatingStar component="span">4.6 ⭐</RatingStar>
        <RatingReview component="span">
          {" "}
          8,795 Ratings & 821 Reviews
        </RatingReview>

        <Box component="span">
          <img
            src={imageURL}
            alt="f-assured"
            style={{ width: "5rem", marginLeft: 18 }}
          />
        </Box>
      </RatingContainer>
      <Typography style={{ color: "green", fontSize: 14, marginTop: 8 }}>
        Special Price
      </Typography>
      <PriceContainer>
        <Typography style={{ fontSize: "2rem", fontWeight: 600 }}>
          ₹{myData.price.cost}{" "}
        </Typography>
        <Mrp component="span">
          <strike>{myData.price.mrp}</strike>
        </Mrp>
        <Discount component="span">{myData.price.discount} off</Discount>
        <Info component="span">
          <InfoOutlinedIcon />
        </Info>
      </PriceContainer>

      <Offers>Available offers</Offers>
      <OfferContainer>
        <OfferDetail>
          <SellIcon style={tagsStyle} />
          <TagLine>
            Bank OfferExtra ₹1250 off on HDFC Bank Credit Card (inc.EMI) and
            Debit EMI on order value of ₹49,999 and above{" "}
            <Box component="span">T&C</Box>{" "}
          </TagLine>
        </OfferDetail>
        <a
          onClick={() => {
            setReadMore(!readMore);
          }}
          href="#"
        >
          <ShowMore>{linkName}</ShowMore>
        </a>
        {readMore && extraContent}
        <OfferDetail>
          <SellIcon style={tagsStyle} />
          <TagLine>
            Partner OfferBuy this product and get upto ₹500 off on Flipkart
            Furniture <Box component="span">Know More</Box>
          </TagLine>
        </OfferDetail>
        <OfferDetail>
          {" "}
          <SellIcon style={tagsStyle} />
          <TagLine>
            Bank OfferFlat INR 100 Instant Discount on transactions made through
            HDFC Internet Banking <Box component="span">Know More</Box>
          </TagLine>
        </OfferDetail>
        <OfferDetail>
          {" "}
          <EventAvailableIcon style={tagsStyle} />
          <TagLine>
            EMI starting from ₹975/month View Plans{" "}
            <Box component="span">Know More</Box>
          </TagLine>
        </OfferDetail>
      </OfferContainer>

      <Table style={{ marginTop: "2rem" }}>
        <TableBody>
          <TableRowWrapper>
            <TableCell
              style={{ color: "#878787", fontSize: 14, verticalAlign: "top" }}
            >
              Delivery
            </TableCell>
            <TableCell style={{ fontSize: 12, verticalAlign: "top" }}>
              <Typography style={{ fontSize: 14 }}>
                {" "}
                Delivery by {date} | Free <strike>₹40</strike>
              </Typography>
              <Box component="span"> if ordered before 5:05 PM</Box>
            </TableCell>
          </TableRowWrapper>
          <TableRowWrapper>
            <TableCell style={{ color: "#878787", fontSize: 14 }}>
              Warranty & Highlights
            </TableCell>
            <TableCell l style={{ fontSize: 14, verticalAlign: "top" }}>
              Two Year Warranty
            </TableCell>
          </TableRowWrapper>
          <TableRowWrapper>
            <TableCell colSpan={2}>
              <img src={coinsURL} alt="supercoins" style={{ width: 390 }} />
            </TableCell>
          </TableRowWrapper>
          <TableRowWrapper style={{ verticalAlign: "top" }}>
            <TableCell style={{ color: "#878787", fontSize: 14 }}>
              Description
            </TableCell>
            <TableCell>{myData.description}</TableCell>
          </TableRowWrapper>
          <TableRowWrapper>
            <TableCell style={{ color: "#878787", fontSize: 14 }}>
              Easy Payment Options
            </TableCell>
            <TableCell>
              <li style={{ color: "#878787", fontSize: 14 }}>
                {" "}
                <Box component="span" style={{ color: "#000", fontSize: 14 }}>
                  {" "}
                  EMI starting from ₹975/month
                </Box>{" "}
              </li>
              <li style={{ color: "#878787", fontSize: 14 }}>
                {" "}
                <Box component="span" style={{ color: "#000", fontSize: 14 }}>
                  Cash on Delivery
                </Box>{" "}
              </li>
              <li style={{ color: "#878787", fontSize: 14 }}>
                {" "}
                <Box component="span" style={{ color: "#000", fontSize: 14 }}>
                  Net banking & Credit/ Debit/ ATM card
                </Box>
              </li>
            </TableCell>
          </TableRowWrapper>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;

const RatingContainer = styled(Box)`
  padding: 0;
  line-height: 1.4;
  font-size: inherit;
  font-weight: inherit;
  display: inline-block;
  display: flex;
  margin-top: 8px;
`;

const RatingStar = styled(Box)`
  color: #fff;
  padding: 2px 4px 2px 6px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 12px;
  height: 1.4rem;
  background-color: #388e3c;
  cursor: pointer;
`;

const RatingReview = styled(Box)`
  padding-left: 8px;
  font-weight: 500;
  color: #878787;
  font-size: 14px;
`;

const PriceContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const Mrp = styled(Box)`
  font-size: 16px;
  margin-left: 12px;
  color: #878787;
`;

const Discount = styled(Box)`
  margin-left: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #388e3c;
`;

const Info = styled(Box)`
  margin: 8px 0 0 8px;
  cursor: pointer;
  color: #c4b9b9;
`;

const Offers = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: #212121;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const OfferContainer = styled(Box)``;

const ShowMore = styled(Typography)`
  color: #3e0079;
  letter-spacing: 1px;
  cursor: pointer;
  font-size: 12px;
  padding-left: 1.5rem;
  display: inline-block;
  transition: all 0.3s ease;
`;

const OfferDetail = styled(Typography)`
  display: flex;
  margin-top: 12px;
`;

const TagLine = styled(Typography)`
  line-height: 1.43;
  color: #212121;
  font-size: 14px;
`;

const TableRowWrapper = styled(TableRow)(({ theme }) => ({
  [theme.breakpoints.down(550)]: {
    display: "flex",
    flexDirection: "column",
  },
}));
