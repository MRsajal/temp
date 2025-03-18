import { Client, Databases } from "node-appwrite";

export default async ({ req, res, log, error }) => {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67d46e91002d944340c0");

  const db = new Databases(client);
  try {
    const response = await db.listDocuments(
      "67d9115d000b1ed64263",
      "67d9116e001b1f9c689f"
    );
    return res.json(response.documents);
  } catch (err) {
    error(err);
    return res.status(500).json({ message: "Error fetching documents" });
  }
};
