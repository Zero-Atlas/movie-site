const express = require("express");

const UserToken = require("../models/userToken");

const router = express.Router();

router.use("/", (req, res, next) => {
  const token = req.query.token;
  UserToken.fetchAll((tokenList) => {
    let auth = false;
    tokenList.forEach((user) => {
      if (user.token === token) auth = true;
    });

    if (auth) {
      next();
    } else {
      res.status(401).send(JSON.stringify({ message: "Unauthorized" }));
    }
  });
});

module.exports = router;
