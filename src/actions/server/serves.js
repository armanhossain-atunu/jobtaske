"use server";

import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getServices = async () => {
  try {
    const collection = await dbConnect("services");
    const services = await collection.find({}).toArray();
    return services || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const getServiceById = async (id) => {
  try {
    if (!ObjectId.isValid(id)) return {};

    const collection = await dbConnect("services");

    const service = await collection.findOne({
      _id: new ObjectId(id),
    });

    return service || {};
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    return {};
  }
};
