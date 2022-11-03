import express from "express";
import * as dotenv from "dotenv";
const { log } = console;
dotenv.config();
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
  log(`Server listening on: http://localhost:${port}`);
});
