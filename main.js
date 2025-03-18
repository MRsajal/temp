import { Client, Databases } from "node-appwrite";

const PROJECT_ID = "67d46e91002d944340c0";
const DB_ID = "67d9115d000b1ed64263";
const COLLECTION_ID = "67d9116e001b1f9c689f";
export default async ({ req, res, log, error }) => {
  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

  const db = new Databases(client);
  try {
    const response = await db.listDocuments(DB_ID, COLLECTION_ID);
    return res.json(response.documents);
  } catch (err) {
    error(err);
    return res.status(500).json({ message: "Error fetching documents" });
  }
};
