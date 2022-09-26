const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      "Please enter a valid email address",
    ],
  },
  thoughts: {
    type: Schema.Types.ObjectId,
    ref: "Thought",
  },
  friends: [],
});

UserSchema.virtual("friendCount").get(function () {
  return this.friends.reduce(
    (total, friends) => total + this.user.friends + 1,
    0
  );
});

const User = model("User", UserSchema);

module.exports = User;
