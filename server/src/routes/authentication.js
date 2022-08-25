const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} = require ('../lib/auth')

router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('../views/auth/signup.hbs')
});

//router.post('signup', (req,res) => {
   // passport.authenticate('local.signup', {
        //successRedirect: '/profile',
        //failureRedirect: '/signup',
        //failureFlash: true
    //})
    //res.send('received');
//});
router.post('signup', isNotLoggedIn, passport.authenticate('local.signup',{
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true

    
}));

router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('../views/auth/signin.hbs')

});

router.post('/signin', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local.singin',{
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req,res,next);
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    res.redirect('../views/auth/signin.hbs')
})

module.exports = router;