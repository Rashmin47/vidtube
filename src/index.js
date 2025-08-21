import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import { app } from "./app.js";
import connectDB from "./db/index.js";

const port = 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection error");
  });
