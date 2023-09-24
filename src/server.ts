import express from "express";
import mongoose from "mongoose";
import env from "./util/validateEnv";

const app = express();
const port = env.PORT;

app.get("/", (req, res) => {
  res.send("first endpoint");
});

mongoose
  .connect(env.MONGO_DB_CONNECTION_URL)
  .then(() => {
    console.log("Mongoose connected"),
      app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
      });
  })
  .catch(console.error);
