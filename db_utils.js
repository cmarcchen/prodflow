const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "prodflow";
const collectionName = "site";

async function connectMongoDb() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  return "done";
}

// Insert One site
async function insertSite(site) {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const insertResult = await collection.insertOne(site);
  console.log("Inserted documents =>", insertResult);
}

// Get All Sites
async function getAllSites() {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const allSites = await collection.find({}).toArray();
  console.log("getAllSites", allSites);
  return allSites;
}

module.exports = { connectMongoDb, insertSite, getAllSites };
