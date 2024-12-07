import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import jobRouter from "./routes/jobRouter.js";




//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});



app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  // console.log(process.env.MONGO_URL); // Check if it's loaded correctly
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
