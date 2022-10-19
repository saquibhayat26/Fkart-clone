import axios from "axios";

const URL = "";

export const authenticateSignUp = async (newUserData) => {
  try {
    return await axios.post(`${URL}/signup`, newUserData);
  } catch (err) {
    console.log(`error while calling signup api ${err.message}`);
    return err.response;
  }
};

export const authenticateLogin = async (loginUserData) => {
  try {
    return await axios.post(`${URL}/login`, loginUserData);
  } catch (err) {
    console.log(`error while calling signup api ${err.message}`);
    console.log(err.response);
  }
};
