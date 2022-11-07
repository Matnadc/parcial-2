import express from "express";
import * as TestimoniesApiController from "../controllers/testimonies.api.controller.js";

const route = express.Router();

route.route("/api/projects/:projectID/testimonies")
    .get(TestimoniesApiController.getAllTestimonies)
    .post(TestimoniesApiController.createTestimony);

route.route("/api/projects/:projectID/testimonies/:testimonyID")
    .delete(TestimoniesApiController.deleteTestimony)

export default route;