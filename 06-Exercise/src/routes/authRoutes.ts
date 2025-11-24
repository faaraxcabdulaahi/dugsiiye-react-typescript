import { Router } from "express";
import { loginUser } from "../controllers/authControllers";

const router = Router();

router.post("/login", loginUser);

export default router;
