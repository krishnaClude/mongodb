import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

interface IUserRequest extends Request {
  user?: any;
}
export const auth = async (
  req: IUserRequest,
  res: Response,
  next: () => any
) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "");
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
