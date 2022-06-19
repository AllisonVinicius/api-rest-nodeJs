import express from "express";
import mongoose from "mongoose";
import router from "./routes";
const app = express();

app.use(express.json());
app.use(router);

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

app.listen(3303);
