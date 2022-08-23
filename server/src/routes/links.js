const express = require('express');
const router = express.Router();

const pool = require('../database')

router.get('/add', (req, res) => {
    res.render('links/add');
});

router.post('/add', async (req, res) => {
    const {title, url, description} = req.body;
    const newLink = { 
        title,
        url,
        description
    };
     await pool.query('INSERT INTO videoclub set ?', [newLink]);
    res.redirect('/angular-cine/server/src/routes/links.js');
});
router.get('/', async (req, res) =>{
    const videoclub = await pool.query('SELECT * FROM videoclub');
    console.log(videoclub)
    res.render('links/list', {links});

})
module.exports = router;