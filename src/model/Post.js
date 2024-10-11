import mongoose from "mongoose";
// Define the Post schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "SPORTS",
        "POLITICS",
        "ENTERTAINMENT",
        "GENERAL",
        "FOREIGN",
        "FOOD",
        "FASHION",
      ],
      default: "GENERAL",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// Create the Post model
const Post = mongoose.model("Post", postSchema);
export default Post;
