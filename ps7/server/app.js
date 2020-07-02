const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const CONFIG = require('../configs/omdbAPI');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log(`Server started!`);
})

client.flushdb((err, success) => {
  if (err) {throw new Error(err)}
});

app.route('/').post(async (req, res, next) => {
  const movietitle = req.body.movietitle;
  console.log(`MOVIETITLE = ${movietitle}`);

  const existsAsync = promisify(client.exists).bind(client);
  const getAsync = promisify(client.get).bind(client);
  const setAsync = promisify(client.set).bind(client);

  let match = await existsAsync(movietitle);

  if (match) {
    let movieData = await getAsync(movietitle);
    res.send(JSON.parse(movieData));
  }
  else {
    let result = await fetch(CONFIG.url + '?apikey=' + CONFIG.key + '&t=' + movietitle);
    const movieResult = await result.json();

    if (movieResult.Response == 'True') {
      let cacheJSON = {
        movieData: movieResult,
        cached: true
      }
      await setAsync(movietitle, JSON.stringify(cacheJSON), 'EX', 30);
      res.send({movieData: movieResult, cached: false});
    }
    else {
      res.status(404).send('Movie not found. Please try again');
    }
  }
})
