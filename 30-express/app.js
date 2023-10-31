const express = require("express")
const app = express()

const rootRoutes = require("./routes")

const PORT = process.env.PORT || 3000

// panggil rootRoutes
app.use(rootRoutes)

app.listen(PORT, () => {
  console.log("server running on port : " + PORT);
})