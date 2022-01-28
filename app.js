const express = require("express");
const app = express();
const amqp = require("amqplib");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

const port = process.env.PORT || 7000;
// const connection, channel;

// Configs
app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({
    message: "Docker something... Powering.",
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
