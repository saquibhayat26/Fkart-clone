import Dialog from "@mui/material/Dialog";
import { authenticateSignUp, authenticateLogin } from "../../service/api";

import { Box, styled, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/userSlice";

const displayInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signUp: {
    view: "signUp",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const SignUpIntitalValue = {
  firstname: "",
  lastname: "",
  username: "",
  mobile: "",
  email: "",
  password: "",
};

const LoginInitialValues = {
  username: "",
  password: "",
};

const DialogBox = ({ ToggleDialog, setToggleDialog }) => {
  const dispatch = useDispatch();

  const [account, toggleAccount] = useState(displayInitialValue.login);
  const [signUpData, setSignUpData] = useState(SignUpIntitalValue);
  const [login, setLogin] = useState(LoginInitialValues);
  const [error, setError] = useState(false);

  function handleDialogClose() {
    setToggleDialog(false);
    toggleAccount(displayInitialValue.login);
    setError(false);
  }

  function handleSignUp() {
    toggleAccount(displayInitialValue.signUp);
  }

  function handleLogin() {
    toggleAccount(displayInitialValue.login);
  }

  const signUpInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignUpData = async (e) => {
    // sending the data as signUpData to server > api.js
    let response = await authenticateSignUp(signUpData);
    if (response.status === 401) {
      setError(true);
    } else {
      if (!response) return;
      localStorage.setItem("loginData", JSON.stringify(response.data.message));
      handleDialogClose();
      dispatch(addUser(signUpData));
    }
  };

  const loginInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const handleLoginData = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      localStorage.setItem("loginData", JSON.stringify(response.data.data));
      handleDialogClose();
      dispatch(addUser(response.data.data));
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={ToggleDialog}
      onClose={handleDialogClose}
      PaperProps={{ sx: { maxWidth: "unset", maxHeight: "unset" } }}
    >
      <MainWrapper>
        <Box style={{ display: "flex", width: "100%", height: "100%" }}>
          <Image>
            <LeftText variant="h5">{account.heading}</LeftText>
            <LeftText>{account.subHeading} </LeftText>
          </Image>

          {account.view === "login" ? (
            <Wrapper>
              <TextField
                required
                name="username"
                label="Enter Username"
                variant="standard"
                onChange={(e) => loginInputChange(e)}
              />
              {error && (
                <Typography style={{ fontSize: 12, color: "red" }}>
                  Invalid Username or Password !
                </Typography>
              )}

              <TextField
                required
                name="password"
                label="Enter Password"
                variant="standard"
                onChange={(e) => loginInputChange(e)}
              />

              <Typography style={{ fontSize: 12, textAlign: "left" }}>
                By continuing, you agree to Flipkart's{" "}
                <span style={{ color: "blue" }}>Terms of Use</span> and{" "}
                <span style={{ color: "blue" }}> Privacy Policy.</span>
              </Typography>

              <Login onClick={() => handleLoginData()}>Login</Login>

              <Text>OR</Text>

              <OtpButton>Request OTP</OtpButton>

              <SignUpButton onClick={handleSignUp}>
                New to Flipkart? Create an account
              </SignUpButton>
            </Wrapper>
          ) : (
            <Wrapper>
              {error && (
                <Typography
                  style={{ fontSize: 12, color: "red", marginBottom: 2 }}
                >
                  Username already exist
                </Typography>
              )}

              <TextField
                style={{ marginTop: "0px" }}
                onChange={(e) => signUpInputChange(e)}
                label="Enter First Name"
                name="firstname"
                variant="standard"
              />
              <TextField
                style={{ marginTop: "0px" }}
                onChange={(e) => signUpInputChange(e)}
                label="Enter Last Name"
                name="lastname"
                variant="standard"
              />
              <TextField
                style={{ marginTop: "0px" }}
                onChange={(e) => signUpInputChange(e)}
                label="Enter User Name"
                name="username"
                variant="standard"
              />
              <TextField
                style={{ marginTop: "0px" }}
                onChange={(e) => signUpInputChange(e)}
                label="Enter Mobile No."
                name="mobile"
                type="number"
                variant="standard"
              />
              <TextField
                style={{ marginTop: "0px" }}
                onChange={(e) => signUpInputChange(e)}
                required
                label="Enter Email Id"
                name="email"
                type="email"
                variant="standard"
              />
              <TextField
                style={{ marginTop: "0px" }}
                onChange={(e) => signUpInputChange(e)}
                required
                label="Enter New Password"
                name="password"
                type="password"
                variant="standard"
              />

              <Typography style={{ fontSize: 12, textAlign: "left" }}>
                By continuing, you agree to Flipkart's{" "}
                <span style={{ color: "blue" }}>Terms of Use</span> and{" "}
                <span style={{ color: "blue" }}> Privacy Policy.</span>
              </Typography>
              <Login onClick={(e) => handleSignUpData(e)}>Continue</Login>
              <OtpButton onClick={handleLogin}>Existing User? Login</OtpButton>
            </Wrapper>
          )}
        </Box>
      </MainWrapper>
    </Dialog>
  );
};

export default DialogBox;

///////-------CSS---------///////////

const MainWrapper = styled(Box)`
  height: 85vh;
  width: 48vw;
  display: flex;
  padding: 0;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 40%;
  height: 100%;
  padding: 45px 35px;
`;

const LeftText = styled(Typography)`
  color: #fff;
  font-weight: 500;
  margin-top: 36px;
`;

const Wrapper = styled(Box)`
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 45px 35px;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Login = styled(Button)`
  background-color: #fb641b;
  color: #fff;
  text-transform: none;
  font-weight: 600;
  height: 48px;
  border-radius: 0;
  &:hover {
    background-color: #fb641b;
  }
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #929292;
`;

const OtpButton = styled(Button)`
  font-size: 14px;
  height: 48px;
  text-transform: none;
  color: #2874f0;
  box-shadow: 0 1px #cfcdcd;
  font-weight: 600;
  font-family: inherit;
  transition: 0.1s ease-in-out;
  &:hover {
    box-shadow: none;
  }
`;

const SignUpButton = styled(Button)`
  font-size: 13px;
  text-transform: none;
  color: #2874f0;
  font-weight: 600;
  font-family: inherit;
`;
