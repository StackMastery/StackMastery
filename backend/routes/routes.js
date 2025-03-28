import express from "express";
import { sendContactEmail } from "../controllers/contact.controllers.js";

const routes = express.Router();

routes.post("/contact/send", sendContactEmail);

export { routes };
