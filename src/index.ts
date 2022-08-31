import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import errorHandler from "./middlewares/errorHandler.js";

import battleRouter from "./routes/battleRouter.js";
// import rankingRouter from "./routes/rankingRouter.js";

const app = express();
app.use(cors());
app.use(json());

app.use(battleRouter);
// app.use(rankingRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server On!"));
