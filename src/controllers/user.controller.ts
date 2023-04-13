import { Request, Response } from "express";
import { createCollection } from "../config/db.config";
import { USER_COLLECTION } from "../constants/collection";
(() => {
  //create collection
  createCollection(USER_COLLECTION);
})();
export const createUser = async (req: Request, res: Response) => {
  try {
    // extract data
  } catch (error) {}
};
