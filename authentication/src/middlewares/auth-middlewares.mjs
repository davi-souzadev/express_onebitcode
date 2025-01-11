export const authMiddleware = (req, res, next) => {
  if (req.session.authenticated) {
    next()
  } else {
    res.redirect("/")
  }
}

export const ensureUserIsAdmin = (req, res, next) => {
  if (req.session.currentUser.role !== "admin") {
    res.redirect("/dashboard")
  } else {
    next()
  }
}
