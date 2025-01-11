import express from "express"
import { auth } from "../controllers/auth-controller.mjs"
import { dashboard } from "../controllers/dashboard-controller.mjs"
import { authMiddleware } from "../middlewares/auth-middlewares.mjs"

export const router = express.Router()

router.get("/", auth.index)

router.post("/auth/register", auth.register)
router.post("/auth/login", auth.login)

router.get("/auth/logout", authMiddleware, auth.logout)

router.get("/dashboard", authMiddleware, dashboard.dashboard)
