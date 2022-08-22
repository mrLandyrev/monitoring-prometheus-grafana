const express = require("express");
const cors = require("cors");

const server = express({});
server.use(cors())
server.use(express.json());

let isHighload = false;

server.get("/metrics", (req, res) => {
    setTimeout(() => {
        res.send(`example_random_metric: ${Math.random() * 5 + (isHighload ? 5 : 0)}`);
    }, Math.random() * (isHighload ? 4000 : 1000));
});

server.post("/highload", (req, res) => {
    isHighload = req.body.isHighload;
    res.send(`Is highload was saved, ${isHighload}`);
});

server.listen(3000, () => console.log("server was started"));