// routes/adminEmployee.routes.js
import express from "express";
import {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
  bulkDeleteEmployees,
} from "../controller/employeeController.js";
import { validateEmployeeInput } from "../middleware/validate.js";

const router = express.Router();

router.post("/", validateEmployeeInput, createEmployee);
router.get("/", getEmployees);
router.patch("/:id", validateEmployeeInput, updateEmployee);
router.delete("/:id", deleteEmployee);
router.delete("/", bulkDeleteEmployees);

export default router;
