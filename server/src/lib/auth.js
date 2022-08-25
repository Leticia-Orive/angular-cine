module.exports = {
    //metodo
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('../views/auth/signin.hbs');
    },
// Para cuando no estas autenticado
    isNotLoggedIn(req, res, next){
        if (req.isAuthenticated()){
            return next();
        }
        return res.redirect('../views/profile.hbs')
    }
}