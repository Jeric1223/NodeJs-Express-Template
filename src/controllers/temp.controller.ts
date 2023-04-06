import express from 'express';
import { StatusCodes } from 'http-status-codes';
import TempService from '../services/temp.service';

class TempController {
  private path = '/api';
  private router = express.Router();
  private tempService: TempService = new TempService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = () => {
    this.router.get(this.path + '/', this.helloWorld);
  };

  private helloWorld = async (req: any, res: any): Promise<void> => {
    try {
      const data = await this.tempService.helloWorld();
      res.status(StatusCodes.OK).send(data);
    } catch (err: any) {
      res.status(520).send(err.message);
    }
  };
}

export default TempController;
