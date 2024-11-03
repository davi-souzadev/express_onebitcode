import { postModel } from "../models/posts.mjs";

export const postsController = {
  //GET /
  index: (req, res) => {
    const posts = postModel.getAll();

    res.render("index", { posts });
  },

  // GET /posts/:id
  show: (req, res) => {
    const id = req.params.id;

    const post = postModel.getById(id);

    res.render("post", { post });
  },
};
