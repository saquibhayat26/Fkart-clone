import Banner from "./Bannner";
import HomeNavBar from "./HomeNavBar";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice";
import ProductSlide from "./ProductSlide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import {
  links1,
  links2,
  links3,
  links4,
  links5,
  links6,
  furnitureData,
  dealData,
} from "../../constants/data";

import { bannerData } from "../../constants/data";

const BannerWrapper = styled(Box)`
  padding: 8px;
`;
const Home = () => {
  const { status, myData } = useSelector((state) => state.product);

  // console.log(status, myData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <HomeNavBar />
      <BannerWrapper>
        <Banner bannerData={bannerData} />
        <MidSection links={links3} />
        <MidSection links={links6} />
        <MidSection links={links5} />
        <MidSlide
          slideProductData={myData}
          slideProductStatus={status}
          title="Best of Electronics"
          timer={true}
        />
        <ProductSlide
          slideProductData={dealData}
          slideProductStatus={status}
          title="Top Deals - Reavealing Soon"
          timer={false}
        />
        <MidSection links={links1} />

        <ProductSlide
          slideProductData={myData}
          slideProductStatus={status}
          title="Beauty, Food, Toys & more"
          timer={false}
        />
        <MidSection links={links4} />

        <MidSection links={links2} />
        <ProductSlide
          slideProductData={myData}
          slideProductStatus={status}
          title="Suggested for You"
          timer={false}
        />
        <MidSection links={links3} />
        <ProductSlide
          slideProductData={myData}
          slideProductStatus={status}
          title="Sports, Healthcare & more"
          timer={false}
        />
        <ProductSlide
          slideProductData={myData}
          slideProductStatus={status}
          title="Home & Kitchen Essentials"
          timer={false}
        />
        <MidSection links={links4} />
        <ProductSlide
          slideProductData={furnitureData}
          slideProductStatus={status}
          title="Best in Furnitures - Coming Soon !"
          timer={false}
        />

        <ProductSlide
          slideProductData={myData}
          slideProductStatus={status}
          title="Offers for You"
          timer={false}
        />
      </BannerWrapper>
    </>
  );
};

export default Home;
