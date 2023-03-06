require("dotenv").config();

const cors = require("cors");

const PORT = process.env.PORT;

const aisRoutes = require("./src/api/ais/ais.routes");

const db = require("./src/utils/db.js");

db.connectDB();

const express = require("express");

const server = express();

server.use(cors());

server.use("/ais", aisRoutes);

server.use("/", (req, res) => {

    res.send("Working")

})

server.listen(PORT, () => {

    console.log("The server is working http://localhost:" + PORT);

});