import express from "express";
import * as dotenv from "dotenv";
const { log } = console;
dotenv.config();
const app = express();
const port = process.env.PORT;
const server = app.listen(port, () => {
  log(`Server listening on: http://localhost:${port}`);
});

server.on("error", (error) => {
  log("Error on starting server", error.message);
});
