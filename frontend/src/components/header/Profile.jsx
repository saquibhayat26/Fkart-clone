import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "./../../redux/features/userSlice";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Box, Typography } from "@mui/material";

const Profile = ({ firstname }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };

  const logoutUser = () => {
    dispatch(removeUser(""));
    localStorage.removeItem("loginData");
  };

  return (
    <>
      <Box
        onClick={(e) => handleClick(e)}
        style={{ fontSize: 14, fontWeight: 600, cursor: "pointer" }}
      >
        <Typography style={{ fontWeight: 600 }}>{firstname}</Typography>
      </Box>
      <Menu anchorEl={openMenu} open={Boolean(openMenu)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          My account
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
