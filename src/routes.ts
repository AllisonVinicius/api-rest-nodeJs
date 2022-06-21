import { Router } from "express";
import CarController from "./controllers/CarController";

const router = Router();

router.post("/cars", CarController.create);
router.get("/cars", CarController.index);
router.get("/cars/:id", CarController.findById);

export default router;
