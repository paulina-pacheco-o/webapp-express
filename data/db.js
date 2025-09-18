const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_movies",
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.log(`Errore nella connessione al db: ${err}`)
  }
  else {
    console.log("Connesione al db avvenuta correttamente")
  }
})