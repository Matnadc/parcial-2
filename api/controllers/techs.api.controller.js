import * as TechsService from "../../services/techs.services.js";

function getAll(req, res){
    TechsService.getTechs()
    .then((techs) => {
        res.status(200).json(techs);
    });
}

function getTechByID(req, res){
    const id = req.params.techID;

    TechsService.getTechByID(id)
    .then((techs) => {
        res.status(200).json(techs);
    });
}

export {
    getAll,
    getTechByID,
}