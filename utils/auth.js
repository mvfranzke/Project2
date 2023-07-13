const withAuth = (req, res, next) => {
    if (!req.session.userID) {
        res.redirect('/auth')
    } else {
    
      next()
    }
}

module.exports = withAuth
