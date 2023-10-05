import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true, selected: false, required: true },
  password: { type: String, selected: false, required: true },
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
