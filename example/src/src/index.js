const express = require("express");
const cors = require("cors");

const server = express({});
server.use(cors())

server.get("/metrics", (req, res) => {
    res.send(`example_random_metric: ${Math.random() * 10}`);
});

server.listen(3000, () => console.log("server was started"));