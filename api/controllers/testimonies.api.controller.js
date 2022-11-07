import * as TestimoniesServices from "../../services/testimonies.services.js";

function createTestimony(req, res){
    const projectId = req.params.projectID;
    const testimony = {
        clientName: req.body.clientName,
        text: req.body.text,
        company: req.body.company
    }

    TestimoniesServices.createTestimony(projectId, testimony)
        .then((result) => {
            res.status(201).json(result);
        });
}

function getAllTestimonies(req, res){
    const projectId = req.params.projectID;

    TestimoniesServices.getTestimonies(projectId)
        .then((result) => {
            res.status(200).json(result);
        });
}

function deleteTestimony(req, res){
    const testimonyID = req.params.testimonyID;

    TestimoniesServices.deleteTestimonyByID(testimonyID)
        .then((result) => {
            res.status(200).json(result);
        });
}

export {
    createTestimony,
    getAllTestimonies,
    deleteTestimony
}