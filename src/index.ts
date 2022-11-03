import express from "express";

const port = 4000;
const app = express();

const server = app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});

server.on("error", (error) => {
  console.log("Error on starting server", error.message);
});
