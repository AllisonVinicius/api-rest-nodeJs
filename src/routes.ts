import { Router } from "express";
import CarController from "./controllers/CarController";

const router = Router();

router.get("/cars", CarController.index);
router.get("/cars/:id", CarController.findById);

export default router;
