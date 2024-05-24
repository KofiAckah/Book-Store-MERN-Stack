import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

// DB Schema
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use("/books", booksRoute);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome To MERN Stack Tutorial");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to datatbase");
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("The Error");
  });
