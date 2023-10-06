import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import passport from "../config/passportConfig.js";

dotenv.config();

const setupMiddleware = (app, isProduction, PORT) => {
  // Enable CORS
  app.use(
    cors({
      origin: isProduction
        ? "https://www.example.com"
        : `http://localhost:${PORT}`,
      credentials: true,
    })
  );

  app.use(express.json()); // Parse JSON automatically
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies automatically

  app.use(passport.initialize()); // Passport Middleware
};

export default setupMiddleware;