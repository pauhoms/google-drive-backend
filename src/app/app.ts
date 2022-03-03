import cors from "cors";
import express, { Application } from "express";

import { loadApiEndpoints } from "./routes";

const app: Application = express();

app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

loadApiEndpoints(app);

export default app;
