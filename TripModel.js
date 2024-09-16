const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    trip: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("TripModel", TripSchema);