const express = require("express");
const controller = require("./controller");
const schema = require("../../validators/question");
const validate = require("../../validators/validate");
const questionRouter = express.Router();

questionRouter.get("/", controller.getQuestion);

questionRouter.get("/:id", controller.getOneQuestion);

questionRouter.post("/", validate(schema.post), controller.addQuestion);

questionRouter.put("/:id", validate(schema.put), controller.updateQuestion);

questionRouter.delete("/:id", controller.deleteQuestion);

module.exports = questionRouter;
