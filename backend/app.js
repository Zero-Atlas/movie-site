const http = require("http");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const movieRouter = require("./routes/movie");
const authorize = require("./middleware/authorize");

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

const server = http.createServer(app);
server.listen(process.env.PORT || 5000);
