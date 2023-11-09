const express = require('express');
const app = express()

const PORT = process.env.PORT || 3000

const db = require("./config/db")
const allRoutes = require("./routes")

db.then(() => {
  console.log("berhasil konek ke mongoDB");
})
.catch(() => {
  console.log("gagal konek ke mongodb");
})


app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})