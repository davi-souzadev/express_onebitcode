export const dashboard = {
  dashboard: (req, res) => {
    const notAuthenticated = !req.session.authenticated

    if (notAuthenticated) {
      console.log("Nao possui login")
      return res.redirect("/")
    }
    console.log(req.session.authenticated)
    console.log(req.session.currentUser)

    res.render("dashboard", { user: req.session.currentUser })
  },
}
