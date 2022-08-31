import { Router } from "express";
import  newBattle  from "../controllers/battleController.js";
import { middleware } from "../middlewares/schemaValidationMiddleware.js";
import { battleSchema } from "../schemas/battleSchemas.js";

const router = Router();
router.post("/battle", middleware(battleSchema), newBattle);

export default router;
