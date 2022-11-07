import * as ProjectsServices from "../../services/projects.services.js";

function getAll(req, res) {
    const filter = {};

    //TODO: filtrar por tecnologías

    if(req.query.public){
        if((req.query.public).toLowerCase() === "true") filter.public = true;
        else filter.public = false;
    }

    if(req.query.techs) filter.techs = req.query.techs;

    ProjectsServices.getProjects(filter)
        .then((projects) => {
            res.status(200).json(projects);
        });
}

function getByID(req, res) {
    const id = req.params.projectID;

    ProjectsServices.getProjectByID(id)
        .then((projects) => {
            if (projects) res.status(200).json(projects);
            else res.status(404).json({ message: "Proyecto no encontrado." });
        });
}

function createProject(req, res) {
    const project = {
        name: req.body.name,
        public: req.body.public,
        desc: req.body.desc,
        techs: req.body.techs,
    }

    ProjectsServices.createProject(project)
        .then((newProject) => {
            res.status(201).json(newProject);
        });
}


function updateByID(req, res){
    const id = req.params.projectID;
    const project = {};

    if(req.body.name) project.name = req.body.name;

    //* Lo hice de esta manera el updatear el estado del proyecto porque por algun motivo que desconozco funcionaba todo bien menos cuando quería updatear a false.
    if(req.body.public === true) project.public = true;
    else project.public = false;

    if(req.body.techs) project.techs = req.body.techs;

    ProjectsServices.updateProject(id, project)
        .then((updatedProject) => {
            if (updatedProject) res.status(200).json({message: "Proyecto editado con éxito."});
            else res.status(404).json({ message: "Proyecto no encontrado." });
        });
}

function deleteByID(req, res){
    const id = req.params.projectID;

    ProjectsServices.deleteProjectByID(id)
    .then((updatedProject) => {
        if (updatedProject) res.status(200).json({message: "Proyecto eliminado con éxito."});
        else res.status(404).json({ message: "Proyecto no encontrado." });
    });
}

export {
    getAll,
    getByID,
    createProject,
    updateByID,
    deleteByID,
}