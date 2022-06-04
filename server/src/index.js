import "dotenv/config";
import "colors";
import express from "express";

import { connectDB } from "./app/db.js";
import { routes } from "./app/routes.js";

const app = express();
routes(app);
connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}...`));
