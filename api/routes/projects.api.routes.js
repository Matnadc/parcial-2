import express from "express";
import * as ProjectsApiController from "../controllers/projects.api.controller.js";
import testimoniesRoute from "./testimonies.api.routes.js";
import galleryRoute from "./gallery.api.routes.js";

const route = express.Router();

route.route("/api/projects")
    .get(ProjectsApiController.getAll)
    .post(ProjectsApiController.createProject)

route.route('/api/projects/:projectID')
    .get(ProjectsApiController.getByID)
    .patch(ProjectsApiController.updateByID)
    .delete(ProjectsApiController.deleteByID);

route.use(testimoniesRoute);
route.use(galleryRoute);

export default route;