/* ...Imported External Modules... */
const express = require("express");
/* ...Imported Core Modules... */
const userController = require("../controllers/userController");
const route = express.Router();

/* ...User Route ... */
route.get("/random", userController.getRandomUser);
route.get("/all", userController.getAllUser);
route.post("/save", userController.saveRandomUser);
route.patch("/update/:id", userController.updateRandomUser);
route.patch("/bulk-update", userController.updateMultipleUser);
route.delete("/delete/:id", userController.deleteUser);

module.exports = route;
