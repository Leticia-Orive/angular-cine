const express = require('express');
const router = express.Router();

const pool = require('../database')

router.get('/add', (req, res) => {
    res.render('movies/add');
});

router.post('/add', async (req, res) => {
    const {id, image, title, description,director,actor,genre,created_at} = req.body;
    const newMovies = { 
        id,
        image,
        title,
        description,
        director,
        actor,
        genre,
        created_at
    };
     await pool.query('INSERT INTO videoclub set ?', [newMovies]);
     req.flash('success', 'Movies saved successfully');
    res.redirect('../views/movies');
});
router.get('/', async (req, res) =>{
    const videoclub = await pool.query('SELECT * FROM videoclub');
    console.log(videoclub)
    res.render('../views/movies/list.hbs', {movies});

});
router.get('/delete/:id', async (req,res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM movies WHERE ID = ?', {id});
    req.flash('success', 'Movies removed successfully')
    res.redirect('../views/movies')
});

router.get('/edit/:id', async (req,res) => {
    const {id} = req.params;
    const movies = await pool.query('SELECT * FROM movies WHERE ID = ?', {id});
    res.render('../views/movies/edit.hbs', {movie: movies[0]})
});

router.post('/edit/:id', async (req,res) => {
    const {id} = req.params;
    const {image, title, description,director,actor,genre,created_at} = req.body; 
    const newMovie = { 
        id,
        image,
        title,
        description,
        director,
        actor,
        genre,
        created_at
    }
    await pool.query('UPDATE movies set ? WHERE id = ?', [newMovie, id]);
    req.flash('success', 'Movies update successfully')
    res.redirect('../views/movies')
}); 
module.exports = router;