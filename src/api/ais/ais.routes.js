const { getAllAis, getAiById, getAiByDev, getAiBeforeYear, } = require("./ais.controller");

const aisRoutes = require("express").Router();

aisRoutes.get("/", getAllAis);
aisRoutes.get("/:id", getAiById);
aisRoutes.get("/getAiByDev/:developer", getAiByDev);
aisRoutes.get("/getAiBeforeYear/:year", getAiBeforeYear);

module.exports = aisRoutes;
