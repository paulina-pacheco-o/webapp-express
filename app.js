const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT

const movieRouter = require("./routers/movieRouter");

app.use(cors({ origin: process.env.FE_APP }));

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Rotta base del mio blog")
})

app.use("/api/movies", movieRouter)

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})