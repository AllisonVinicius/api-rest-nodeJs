import express, { Request, Response } from "express";
import mongoose from "mongoose";
const app = express();

mongoose
  .connect(
    "mongodb+srv://allisonvinicius:alli123corumba@cluster0.d55qh.mongodb.net/?retryWrites=true&w=majority"
  )

  .then(data => {
    console.log("MondoDb conected success ...");
  })

  .catch(err => {
    console.log("erro conected MongoDb", err.message);
  });

app.get("/", (req: Request, res: Response) => {
  return res.send("HEllo Word");
});

app.listen(3303);
