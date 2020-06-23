const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const CONFIG = require('../configs/omdbAPI')

client.flushdb((err, success) => {
        if (err) {throw new Error(err)}
});

router.route('/')
    .post(async (req, res, next) => {
         const movieSearch = req.body.movietitle;

         const existsAsync = promisify(client.exists).bind(client);
         const getAsync = promisify(client.get).bind(client);
         const setAsync = promisify(client.set).bind(client);

         let match = await existsAsync(movieSearch);

         if (match) {
              let movieData = await getAsync(movieSearch);
              console.table(movieData);
              res.send((JSON.parse(movieData)));
         }
         else {
              let result = await fetch(CONFIG.url + '?apikey=' + CONFIG.key + '&t=' + movieSearch );
              const movieResult = await result.json();

              if (movieResult.Response == 'True') {
                   let cachedJSON = {
                       movieData: movieResult,
                       cached: true
                   }
                   await setAsync(movieSearch, JSON.stringify(cachedJSON), 'EX', 30);
                   res.send({movieData:movieResult, cached:false});
              }
              else {
                   res.status(404).send('Movie not found. Please try again');
              }
         }
});

module.exports = router;