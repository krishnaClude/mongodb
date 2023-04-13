import { MongoClient } from "mongodb";

const url = process.env.DB_URL || "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_NAME || "newdb";

export async function dbTest() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("col");
  console.log(collection);
  // the following code examples can be pasted here...
  client.close();
  return "done.";
}

export const dbConnect = async () => {
  await client.connect();
  const db = client.db(dbName);
  return db;
};
export const createCollection = async (collection_name: string) => {
  try {
    const db = await dbConnect();
    await db.createCollection(collection_name);
    return true;
  } catch (error) {
    console.log(`the ${collection_name} already created`, error);
    return false;
  }
};
export const dbClose = () => {
  client.close();
  return true;
};
