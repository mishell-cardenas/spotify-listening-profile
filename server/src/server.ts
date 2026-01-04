import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./auth.js";
import router from "./api/routes.js";

const app = express();

console.log("ENV PORT =", process.env.PORT);
const PORT = Number(process.env.PORT) || 8080;
console.log("Using PORT =", PORT);

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN;

// Railway proxy
app.set("trust proxy", 1)


// Middleware
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true,
  })
)
app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/auth", authRouter)
app.use("/", router)

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on http://0.0.0.0:${PORT}`);
});