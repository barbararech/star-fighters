import { NextFunction, Request, Response } from "express";

interface Error {
  name: string;
  message: string;
  stack?: string;
  status?: number;
  code?: string;
}

export default async function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  
  if (error.code === "NotFound" || error.code === "ERR_BAD_REQUEST") {
    return res.status(404).send(error.message);
  }

  res.status(500).send(error.message);
}
