import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";
import "dotenv/config";

export default cleanEnv(process.env, {
  MONGO_DB_CONNECTION_URL: str(),
  PORT: port(),
  SESSION_SECRET: str(),
});
