import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH_P2");

async function createTestimony(id, testimony){
    const newTestimoy = {
        ...testimony,
        projectID: new ObjectId(id)
    }

    return client.connect()
        .then(async () => {
            return db.collection("testimonies").insertOne(newTestimoy);
        })
        .then(() => {
            return newTestimoy;
        })
}

async function getTestimonies(id){
    const filter = {
        projectID: new ObjectId(id)
    }

    return client.connect()
    .then(async () => {
        return db.collection("testimonies").find(filter).toArray();
    })
}

async function deleteTestimonyByID(id) {
    return client.connect()
        .then(() => {
            return db.collection("testimonies").deleteOne({ _id: new ObjectId(id) });
        })
        .then(() => {
            return true;
        });
}

export {
    createTestimony,
    getTestimonies,
    deleteTestimonyByID
}