import { PostModel } from '../models/PostModel.js';

export const getPosts = async (req, res) => {
  try {
    // const post = new PostModel({
    //   title: 'xin chào',
    //   content:'nội dung...',
    // });
    // post.save()

    const posts = await PostModel.find(); // .find() -> return tất cả post trong database
    res.status(200).json(posts); //gửi trạng thái về cho client
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;

    const post = new PostModel(newPost);
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;

    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id }, //id post từ client gửi lên
      updatePost, //nội dung của post cần update
      { new: true } // update nội dung lên mới
    );

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deletePost = async (req, res) => {
  try {
    // const deletePost = req.body
    // const post = await PostModel.findByIdAndDelete(
    //   {_id: deletePost._id},
    // )
    
    const deletePost = req.params._id;
    const post = await PostModel.findByIdAndDelete(deletePost);
    console.log('post to del - ',);
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({error: error});
  }
};