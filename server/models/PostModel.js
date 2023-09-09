import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: 'Anonymous',
    },
    attachment: String, //upload img
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // auto add fields createdAt, updatedAt
);

export const PostModel = mongoose.model('Post', schema);