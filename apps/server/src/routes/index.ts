import { Router } from "express";
import { todoRouter } from "./Todo";

export const router = Router();

router.use("/todo", todoRouter);
