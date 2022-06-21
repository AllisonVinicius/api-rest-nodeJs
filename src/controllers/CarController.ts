import { Request, Response } from "express";
import CarModel from "../database/CarModel";
const CarController = {
  async index(req: Request, res: Response): Promise<Response> {
    let cars = await CarModel.find();

    return res.json(cars);
  },
  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    let cars = await CarModel.findById(id);

    return res.json(cars);
  },
};

export default CarController;
