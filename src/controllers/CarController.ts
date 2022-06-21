import { Request, Response } from "express";
import CarModel from "../database/CarModel";

const CarController = {
  async create(req: Request, res: Response): Promise<Response> {
    const { marca, modelo, versao, ano, quilometragem, tipoModelo, preco } =
      req.body;
    let cars = await CarModel.create({
      marca,
      modelo,
      versao,
      ano,
      quilometragem,
      tipoModelo,
      preco,
    });

    return res.json(cars);
  },

  async index(req: Request, res: Response): Promise<Response> {
    let cars = await CarModel.find();

    return res.json(cars);
  },
  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    let cars = await CarModel.findById(id);

    return res.json(cars);
  },

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { marca, modelo, versao, ano, quilometragem, tipoModelo, preco } =
      req.body;
    let cars = await CarModel.findByIdAndUpdate(id, {
      marca: marca,
      modelo: modelo,
      versao: versao,
      ano: ano,
      quilometragem: quilometragem,
      tipoModelo: tipoModelo,
      preco: preco,
    });

    return res.json(cars);
  },
};

export default CarController;
