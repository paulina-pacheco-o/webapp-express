const connection = require('../data/db');

const index = (req, res) => {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })

    res.send(results);
  })
}

const show = (req, res) => {
  const { id } = req.params;

  const sqlMovie = "SELECT * FROM movies WHERE id = ?";

  const sqlReviews = "SELECT * FROM reviews WHERE movie_id = ?";

  connection.query(sqlMovie, [id], (err, resultMovie) => {
    if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })

    if (resultMovie.length === 0 || resultMovie[0].id === null) return res.status(404).json({ error: `Libro non trovato` })

    connection.query(sqlReviews, [id], (err, resultReview) => {
      if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })

      const movieWithReviews = {
        ...resultMovie[0],
        reviews: resultReview
      }

      res.send(movieWithReviews);
    })

  })
}

module.exports = {
  index,
  show
}