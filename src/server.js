import "./config.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./dataBase/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

const PORT = process.env.PORT || 8000;

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const URL =
  process.env.MONGODB_URI ||
  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@ecommerce-web.rfx5eiq.mongodb.net/?retryWrites=true&w=majority`;

Connection(URL);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

DefaultData();
