import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice";

const InputBaseWrapper = styled(Box)(({ theme }) => ({
  background: "#fff",
  height: "62%",
  width: "34%",
  marginLeft: " 12px",
  display: "flex",
  alignItems: "center",
  boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    width: "45%",
  },
}));

const InputContainer = styled(InputBase)`
  width: 100%;
  padding-left: 12px;
`;

const InputSearchIcon = styled(Box)`
  display: flex;
  color: #357df1;
  padding-right: 12px;
  cursor: pointer;
`;

const Wrapper = styled(List)`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  color: #000;
  width: 100%;
  top: 2.2rem;
`;

const Input = () => {
  const dispatch = useDispatch();
  const { myData } = useSelector((state) => state.product);
  // console.log(myData);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput);
  };

  return (
    <InputBaseWrapper>
      <InputContainer
        placeholder="Search for any Items, Brands & more"
        sx={{
          color: "#000000",
          fontSize: 14,
          fontWeight: 500,
        }}
        onChange={(e) => handleChange(e)}
        value={search}
      />
      <InputSearchIcon>
        <SearchIcon />
      </InputSearchIcon>
      {search && (
        <Wrapper>
          {myData
            .filter((product) =>
              product.title.longTitle
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((filteredProduct) => (
              <Link
                to={`/product/${filteredProduct.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => setSearch("")}
              >
                <ListItem>{filteredProduct.title.longTitle}</ListItem>
              </Link>
            ))}
        </Wrapper>
      )}
    </InputBaseWrapper>
  );
};

export default Input;
