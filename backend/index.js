const http = require("http");
const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const movieRouter = require("./routes/movie");
const authorize = require("./middleware/authorize");

const MONGODB_URI = `mongodb+srv://andachuynh:${process.env.MONGO_PASSWORD}@movie-site.kpkcv1h.mongodb.net/${process.env.MONGO_DATABASE}`;

const app = express();
app.use(
  cors({
    origin: "https://movie-site-dusky.vercel.app",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
  })
);
app.set("trust proxy", 1);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(authorize);

app.use(movieRouter);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });
