import { dbConnect } from "./dbConnect.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedServices = async () => {
  try {
    console.log("Connecting to database...");
    const collection = await dbConnect("services");

    // Check if services already exist
    const existingServices = await collection.countDocuments();
    console.log(`Existing services: ${existingServices}`);
    if (existingServices > 0) {
      console.log("Services already seeded. Skipping...");
      return;
    }

    // Read services from JSON file
    const servicesPath = path.join(__dirname, "../data/services.json");
    console.log(`Reading services from ${servicesPath}`);
    const servicesData = JSON.parse(fs.readFileSync(servicesPath, "utf-8"));
    console.log(`Found ${servicesData.length} services in JSON`);

    // Transform data to match MongoDB structure (add _id, remove id)
    const services = servicesData.map(service => ({
      ...service,
      _id: undefined, // Let MongoDB generate ObjectId
    }));

    // Insert services
    const result = await collection.insertMany(services);
    console.log(`Seeded ${result.insertedCount} services successfully.`);
  } catch (error) {
    console.error("Error seeding services:", error);
  } finally {
    process.exit(0);
  }
};

seedServices();