import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster01.dvyetet.mongodb.net/test`);
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}

export {
    db,
    connectToDb,
};