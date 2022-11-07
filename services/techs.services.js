import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH_P2");

//Trae de la base todas las tecnologías
async function getTechs() {
    return client.connect()
        .then(() => {
            return db.collection("techs").find().toArray();
        });
}

//Trae de la base la tecnología que matcheé con el id
async function getTechByID(id) {
    return client.connect()
        .then(() => {
            return db.collection("techs").findOne({ _id: new ObjectId(id) });
        });
}

export {
    getTechs,
    getTechByID,
}