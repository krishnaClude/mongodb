import express, { Express, Request, Response } from "express";
import "dotenv/config";

import { getAllData } from "./models/query";
import router from "./routes/common.routes";
import userRouter from "./routes/user.routes";
import bodyParser from "body-parser";
import { generateTokens } from "./config/token.config";
const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", router);
app.use("/user", userRouter);
app.get("/", async (req: Request, res: Response) => {
  // generateTokens();
  const AllData = await getAllData();
  res.send(JSON.stringify(AllData));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
