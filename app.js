const express = require('express');
const app = express();
const port = process.env.PORT

const movieRouter = require("./routers/movieRouter");

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Rotta base del mio blog")
})

app.use(("/api/movies", movieRouter))

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})