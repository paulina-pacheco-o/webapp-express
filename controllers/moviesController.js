//importiamo la connessione al db
const connection = require('../data/db');

//index
const index = (req, res) => {
  const sql = "SELECT * FROM movies";

  //eseguo la query
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })

    res.send(results);
  })
}

//show
const show = (req, res) => {
  //recupero l'id parametro
  const { id } = req.params;

  //creo la query per il libro
  const sqlMovie = "SELECT * FROM movies WHERE id = ?";

  //eseguo la query passando ora i parametri
  connection.query(sqlMovie, [id], (err, resultMovie) => {
    if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })

    //controllo se non ho trovato il libro
    if (resultMovie.length === 0 || resultMovie[0].id === null) return res.status(404).json({ error: `Libro non trovato` })


    //creo la query per le recensioni
    const sqlReviews = "SELECT * FROM reviews WHERE movie_id = ?";

    //eseguo la query delle reviews
    connection.query(sqlReviews, [id], (err, resultReview) => {
      if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })

      //creo un nuovo oggetto contente i dati del libro e l'array delle recensioni
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