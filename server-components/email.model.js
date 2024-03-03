import mongoose from "mongoose";

const emailSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const emailModel = mongoose.model("Email", emailSchema);
