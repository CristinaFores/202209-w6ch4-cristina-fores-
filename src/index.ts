import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { getThings } from "./controllers/controllers.js";
const { log } = console;

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/things", getThings);

app.listen(port, () => {
  log(`Server listening on: ${port}`);
});
