import mongoose from "mongoose";

const userSchecma = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "member",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("Users", userSchecma);

export default User;
