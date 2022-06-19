import mongoose, { Schema } from "mongoose";

const CarModel = new Schema(
  {
    marca: String,
    modelo: String,
    versao: String,
    ano: String,
    quilometragem: Number,
    tipoModelo: String,
    preco: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Car", CarModel);
