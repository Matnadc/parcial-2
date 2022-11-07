import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH_P2");

/**
 * Busca en la base todos los proyectos.
 * 
 * @param { object } [filter] - Criterio de filtrado 
 */
async function getProjects(filter) {
    return client.connect()
        .then(async () => {
            return db.collection("projects").find(filter).toArray();
        })
}

/**
 * Busca en la base un proyecto
 * 
 * @param { string } id - Id del proyecto
 */
async function getProjectByID(id) {
    return client.connect()
        .then(() => {
            return db.collection("projects").findOne({ _id: new ObjectId(id) });
        });
}

/**
 * Crea en la base un proyecto
 * 
 * @param { object } project - Datos del proyecto, ej: name, desc, public, etc
 */
async function createProject(project) {
    const newProject = {
        ...project,
    }

    return client.connect()
        .then(() => {
            return db.collection("projects").insertOne(newProject);
        })
        .then(() => {
            return newProject;
        });
}

/**
 * Elimina de la base un proyecto
 * 
 * @param { string } id - Id del proyecto
 */
async function deleteProjectByID(id) {
    return client.connect()
        .then(() => {
            return db.collection("projects").deleteOne({ _id: new ObjectId(id) });
        })
        .then(() => {
            return true;
        });
}

/**
 * Actualiza en la base un proyecto
 * 
 * @param { string } id - Id del proyecto
 * @param { object } project - Datos con los que actualizar el proyecto
 */
async function updateProject(id, project) {
    return client.connect()
        .then(() => {
            return db.collection("projects").updateOne({ _id: new ObjectId(id) }, { "$set": project });
        });
}

export {
    getProjects,
    getProjectByID,
    createProject,
    deleteProjectByID,
    updateProject,
}