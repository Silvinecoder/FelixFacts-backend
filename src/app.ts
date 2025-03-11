import express from "express";
import cors from "cors";

import { config } from "dotenv";
import router from "./routes/router";

config();

// Initializes the express application and middleware
const app = express();
app.use(express.json());

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies
app.use("/api", router); // Mount the router at /api

export default app;
