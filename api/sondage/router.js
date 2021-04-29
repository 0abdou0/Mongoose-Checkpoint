const express = require("express");
const controller = require("./controller");
const schema = require("../../validators/sondage");
const validate = require("../../validators/validate");
const sondageRouter = express.Router();

sondageRouter.get("/", controller.getSondages);

sondageRouter.get("/:id", controller.getOneSondage);

sondageRouter.post("/", validate(schema.post), controller.addSondage);

sondageRouter.put("/:id", validate(schema.put), controller.updateSondage);

sondageRouter.delete("/:id", controller.deleteSondage);

module.exports = sondageRouter;
