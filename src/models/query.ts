import { dbConnect } from "../config/db.config";
import { COL_COLLECTION } from "../constants/collection";

export const getAllData = async () => {
  const collection = await (await dbConnect()).collection(COL_COLLECTION);
  const data = collection.find({}).toArray();
  return data;
};
