import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Only create 1 global connection
let cached = global._mongo;

if (!cached) {
  cached = global._mongo = { conn: null };
}

export const dbConnect = async (collectionName) => {
  if (!cached.conn) {
    cached.conn = await client.connect();
  }
  const db = cached.conn.db(dbName);
  return db.collection(collectionName);
};
