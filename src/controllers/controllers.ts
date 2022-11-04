import chalk from "chalk";
import type { Request, Response } from "express";
import thingsKnows from "../data/things.js";

const { log } = console;

export const getThings = (req: Request, res: Response) => {
  log(chalk.bgMagenta("OOOH"));
  res.status(200).json({ thingsKnows });
};

export const getThingsId = (req: Request, res: Response) => {
  const { idThing } = req.params;
  log("hola");
  const thingKnowId = thingsKnows.find(
    (thingKnow) => thingKnow.id === Number(idThing)
  );

  if (!thingKnowId) {
    res.status(404).json({ error: "Sorry id not found 🙅‍♀️ " });
    return;
  }

  res.status(200).json({ thingKnowId });
};

export const deletethingKnowId = (req: Request, res: Response) => {
  const { idThing } = req.params;

  const thingKnowId = thingsKnows.findIndex(
    (thingKnow) => thingKnow.id === Number(idThing)
  );

  log(thingKnowId, idThing);
  if (thingKnowId === -1) {
    log(chalk.bgCyan("ID not found"));
    res.status(404).json({ error: `Sorry id not found  ${idThing} 🙅‍♀️🙅‍♀️` });

    return;
  }

  log(chalk.bgRed("Delete"));
  thingsKnows.splice(thingKnowId, 1);

  res
    .status(200)
    .json({ message: `Thing has been deleted correctly ${idThing} ✅✅` });
};
