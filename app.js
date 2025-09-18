const express = require('express');
const app = express();
const port = process.env.PORT

app.get("/", (req, res) => {
  res.send("Rotta base del mio blog")
})

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})