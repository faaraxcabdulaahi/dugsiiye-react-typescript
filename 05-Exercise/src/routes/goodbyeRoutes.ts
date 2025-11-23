import {Router} from "express";
import { sayGoodbye } from "../controllers/goodByHelloController";

const router = Router();

router.get("/", sayGoodbye);

export default router;