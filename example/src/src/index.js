const express = require("express");
const cors = require("cors");

const server = express({});
server.use(cors())
server.use(express.json());

let isHighload = false;

server.get("/metrics", (req, res) => {
    res.send(`example_random_metric: ${Math.random() * 5 + (isHighload ? 5 : 0)}`);
});

server.post("/highload", (req, res) => {
    isHighload = req.body.isHighload;
    res.send(`Is highload was saved, ${isHighload}`);
});

server.listen(3000, () => console.log("server was started"));