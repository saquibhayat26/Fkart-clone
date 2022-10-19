import User from "../model/user-schema.js";

export const userSignUp = async (req, res, next) => {
  try {
    const registered = await User.findOne({ username: req.body.username });
    if (registered) {
      return res.status(401).json({ message: "username already exist" });
    }

    const user = req.body;
    console.log(user);
    const newUser = new User(user);

    await newUser.save();

    res.status(200).json({ message: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    let user = await User.findOne({
      username: username,
      password: password,
    });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json("invalid request");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
