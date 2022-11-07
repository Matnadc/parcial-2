import express from "express";
import * as GalleryApiController from "../controllers/gallery.api.controller.js";

const route = express.Router();

route.route("/api/projects/:projectID/gallery")
    .get(GalleryApiController.getAllGallery)
    .post(GalleryApiController.createImage)

route.route("/api/projects/:projectID/gallery/:imageID")
    .delete(GalleryApiController.deleteImage)

export default route;