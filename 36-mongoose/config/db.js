const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://auzan:auzan@mycluster.mkryk.gcp.mongodb.net/km5_mongoose"

const db = mongoose.connect(DB_URL)

module.exports = db