import express from "express";

import error from "../middleware/error.js";
import questions from "../routes/questions.js";

export const routes = (app) => {
  app.use(express.json());
  app.use("/api/questions", questions);
  app.use(error);
};
