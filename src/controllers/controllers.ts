import chalk from "chalk";
import type { Request, Response } from "express";

import thingsKnows from "../data/things.js";

export const getThings = (req: Request, res: Response) => {
  console.log(chalk.bgMagenta("OOOH"));
  res.status(200).json({ thingsKnows });
};

export const getThingsId = (req: Request, res: Response) => {
  const { idThing } = req.params;

  const thingKnowId = thingsKnows.find(
    (thingKnow) => thingKnow.id === Number(idThing)
  );

  if (!thingKnowId) {
    res.status(404).json({ error: "Sorry id not found 🙅‍♀️ " });
    return;
  }

  res.status(200).json({ thingKnowId });
};
