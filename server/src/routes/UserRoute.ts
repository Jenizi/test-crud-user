import express from "express";
import UserController = require("../controllers/UserController");
// import { authMiddleware } from "../middlewares/authMiddleware";

module.exports = (app: ReturnType<typeof express>) => {
  app.post("/user", UserController.create);
  // app.post("/signin", UserController.signin);
  // app.use(authMiddleware);
  app.get("/users", UserController.getUsers);
  app.put("/user/:id", UserController.update);
  app.delete("/user/:id", UserController.deleteUser);
};
