import { Request, Response } from "express";
import * as battleService from "../services/battleService.js";

export default async function newBattle(req: Request, res: Response) {
  const { firstUser, secondUser } = req.body;
  const result = await battleService.addBattle(firstUser, secondUser);
  res.status(200).send(result);
}
