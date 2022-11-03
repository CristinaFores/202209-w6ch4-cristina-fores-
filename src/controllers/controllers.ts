import chalk from "chalk";
import type { Request, Response } from "express";

import thingsKnows from "../data/things.js";

export const getThings = (req: Request, res: Response) => {
  console.log(chalk.bgMagenta("OOOH"));
  res.status(200).json({ thingsKnows });
};
