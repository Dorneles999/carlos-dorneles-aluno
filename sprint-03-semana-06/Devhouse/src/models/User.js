import { Schema, model } from "mongoose";

const Userschema = new Schema({
  email: String,
});

export default model("User", Userschema);
