import { StatusCodes } from 'http-status-codes';
import { Router, Request, Response, NextFunction } from 'express';

const statusRoute = Router();

statusRoute.get(
  '/status',
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
  }
);

export default statusRoute;
