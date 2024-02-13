import { Router } from "express";
import {
  createInsidencia,
  deleteIncidencias,
  getAllIncidencias,

  incidenciasFilter,
  updateIncidencias,

} from "../controllers/tasks.controller.js";

const router = Router();

// create a task
router.post("/tasks", createInsidencia);

router.get("/tasks", getAllIncidencias);

router.get("/tasks/:estado", incidenciasFilter);

router.put("/tasks/:id", updateIncidencias);

router.delete("/tasks/:id", deleteIncidencias);

export default router;
