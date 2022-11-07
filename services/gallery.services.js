import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH_P2");

async function createImage(id, image) {
    const newImage = {
        ...image,
        projectID: new ObjectId(id)
    }

    return client.connect()
        .then(async () => {
            return db.collection("gallery").insertOne(newImage);
        })
        .then(() => {
            return newImage;
        });
}

async function getAllGallery(id) {
    const filter = {
        projectID: new ObjectId(id)
    }

    return client.connect()
        .then(async () => {
            return db.collection("gallery").find(filter).toArray();
        });
}

async function deleteImageByID(id) {
    return client.connect()
        .then(() => {
            return db.collection("gallery").deleteOne({ _id: new ObjectId(id) });
        })
        .then(() => {
            return true;
        });
}

export {
    createImage,
    getAllGallery,
    deleteImageByID
}