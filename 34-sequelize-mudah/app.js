const express = require('express');
const app = express()

const db = require("./config/db");
const User = require('./models/User');

const allRoutes = require("./routes")

const PORT = process.env.PORT || 3000

async function testConnection(){
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');

    // await db.sync({ force: true });
    // await User.sync({ force: true })
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection()

app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})
