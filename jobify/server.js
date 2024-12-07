import * as dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

import morgan from "morgan";

import jobRouter from './routes/jobRouter.js'



if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}



app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data recived", data: req.body });
});


app.use('/api/v1/jobs',jobRouter)


app.use('*',(req,res)=>{
  //This middleware catches any requests that don't match any existing routes
  res.status(404).json({ msg: "not fond" });
})

app.use((err,req,res,next)=>{
  //This middleware is for catching errors that happen during request processing.
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
})


const port=process.env.PORT || 5100

app.listen(port, () => {
  console.log(`Server Running on PORT ${port}...`);
});
