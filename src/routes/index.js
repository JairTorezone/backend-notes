const { Router } = require("express");

const userRoutes = require("./users.routes");
const noteRoutes = require("./notes.routes");

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/notes", noteRoutes);

module.exports = routes;
