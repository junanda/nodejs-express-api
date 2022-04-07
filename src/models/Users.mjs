import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchecma = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
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

userSchecma.plugin(passportLocalMongoose);

const User = mongoose.model("Users", userSchecma);

export default User;
