import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@mui/material";

import { Link } from "react-router-dom";

//components
import Input from "./Input";
import CustomButtons from "./CustomButtons";

import { Menu } from "@mui/icons-material";

import Drawer from "@mui/material/Drawer";
import { useState } from "react";

const StyledHeader = styled(AppBar)`
  height: 55px;
  background-color: #2874f0;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 11px;
  font-style: italic;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 20px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuItem = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box onClick={() => handleClose()} style={{ width: "14rem" }}>
      <List>
        <ListItem>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );

  const Logo =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const SubLogo =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuItem onClick={handleOpen}>
          <Menu />
        </MenuItem>
        <Drawer open={open} onClose={() => handleClose()}>
          {list()}
        </Drawer>
        <Component to={"/"}>
          <img src={Logo} alt="logo" style={{ width: 72, cursor: "pointer" }} />
          <Box style={{ display: "flex", alignItems: "center" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "yellow" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={SubLogo} alt="plus-logo" />
          </Box>
        </Component>
        <Input />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
