import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { routes } from "./routes/routes.js";
import { VerifyOrigin } from "./middlewares/verifyOrigin.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api", routes);
app.use(VerifyOrigin);

app.listen(port, () => {
  console.log(`Server runnign on ${port}`);
});
