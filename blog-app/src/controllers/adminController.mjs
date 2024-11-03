import { postModel } from "../models/posts.mjs"

export const adminController = {
  // GET /admin
  index: (req, res) => {
    const posts = postModel.getAll()

    res.render('admin', { posts })
  },

  // GET /admin/create
  create: (req, res) => {
    res.render('newPostForm')
  },

  // POST /admin/create
  save: (req, res) => {
    const { title, content } = req.body

    const newPost = postModel.create(title, content)
    postModel.savePost(newPost)

    res.redirect('/admin')
  },

  // GET /admin/edit/:id
  edit: (req, res) => {
    const id = req.params.id

    const post = postModel.getById(id)

    res.render('editPostForm', { post })
  },

  // POST /admin/update/:id
  update: (req, res) => {
    const id = req.params.id
    const { title, content } = req.body

    postModel.update(id, { title, content })

    res.redirect('/admin')
  },

  // POST /admin/delete/:id
  delete: (req, res) => {
    const id = req.params.id

    postModel.delete(id)

    res.redirect('/admin')
  }
}