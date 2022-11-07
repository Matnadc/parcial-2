import * as GalleryServices from "../../services/gallery.services.js";

function getAllGallery(req, res){
    const projectId = req.params.projectID;

    GalleryServices.getAllGallery(projectId)
        .then((result) => {
            res.status(200).json(result);
        });
}

function createImage(req, res){
    const projectId = req.params.projectID;

    const imgData = {
        imgUrl: req.body.imgUrl,
        desc: req.body.desc
    }

    GalleryServices.createImage(projectId, imgData)
        .then((result) => {
            res.status(201).json(result);
        });
}

function deleteImage(req, res){
    const imageID = req.params.imageID;

    GalleryServices.deleteImageByID(imageID)
        .then((result) => {
            res.status(200).json(result);
        });
}

export {
    getAllGallery,
    createImage,
    deleteImage
}