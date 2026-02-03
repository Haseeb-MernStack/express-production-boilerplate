import express from "express";
import { check } from "../controllers/health.controller.js";

const router = express.Router();
router.get("/health", check);

export default router;
