import express from "express";
import * as TechsApiController from "../controllers/techs.api.controller.js";

const route = express.Router();

route.route("/api/techs")
.get(TechsApiController.getAll)

route.route("/api/techs/:techID")
.get(TechsApiController.getTechByID)

export default route;