const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/omdbAPI')

router.route('/')
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?apikey=' + CONFIG.key + '&t=' + req.body.movietitle );
        let movie = await result.json();
        if (movie.Response == 'True') {
                res.render('ps4', { title: 'PS4 Assignment', movie: movie.Title, year: movie.Year, poster: movie.Poster, plot: movie.Plot });
        }
        else {
                res.status(404).send('Movie not found. Please try again');
        }
});

module.exports = router;