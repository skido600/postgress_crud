import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userConroller.js";
import validateuser from "../middlewares/inputvalidator.js";

const router = express.Router();

router.post("/user", validateuser, createUser);
router.get("/user/:id", getUserById);
router.get("/user", getAllUsers);
router.put("/user/:id", validateuser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
