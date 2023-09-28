import mongoose from "mongoose";
import env from "./util/validateEnv";
import app from './app';

const port = env.PORT;

mongoose
  .connect(env.MONGO_DB_CONNECTION_URL)
  .then(() => {
    console.log("Mongoose connected"),
      app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
      });
  })
  .catch(console.error);
