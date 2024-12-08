import { Router } from "express";
const router = Router();
import { register, login } from "../controllers/authController.js";
import { validateLoginInput, validateRegisterInput } from "../middleware/validationMiddleware.js";




router.post("/register",validateRegisterInput, register);
router.post("/login",validateLoginInput, login);

export default router;