import express, { Request, Response } from "express";
import { generateTokens } from "../config/token.config";
const router = express.Router();
router.get("/test", (req: Request, res: Response) => {
  res.send("Contact route is displaying data");
});
router.get("/generateToken", (req: Request, res: Response) => {
  const tokens = generateTokens();
  res.json(tokens);
});
export default router;
