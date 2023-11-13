const express = require('express');
const app = express()

const allRoutes = require("./routes")

const PORT = process.env.PORT || 3000

app.use(allRoutes)

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})