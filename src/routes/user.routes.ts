import express, { Request, Response } from "express";
const userRouter = express.Router();
userRouter.get("/createUser", (req: Request, res: Response) => {
  res.send("User route is displaying data");
});
export default userRouter;
