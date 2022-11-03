import express from "express";
import * as dotenv from "dotenv";
const { log } = console;
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use((req, res) => {
  res.status(200).json({ message: "ENPOINT NOT FOUND" });
});
app.listen(port, () => {
  log(`Server listening on: ${port}`);
});
