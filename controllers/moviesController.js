const connection = require('../data/db');

const index = (req, res) => {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })

    res.send(results);
  })
}

const show = (req, res) => {
  console.log('Metodo show')
}

module.exports = {
  index,
  show
}