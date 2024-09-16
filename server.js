const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const DataModel = require("./DataModel")
const TripModel = require("./TripModel")
const connectDB = require("./Database");
connectDB();

const app = express();
app.use(express.json({ extended: false }));

const cors = require("cors");
app.use(cors());

app.get("/readfromserver", async (req, res) => {
  try {
    const data = await DataModel.find({}, 'username password -_id');
    res.json(data);
  } catch (error) {
    console.error("Server error while reading data:", error.message);
    res.status(500).send("Server error while reading data");
  }
});

app.post("/writetodatabase", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const newData = new DataModel({ username, password, email });
    await newData.save();
    res.json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Server error while saving data:", error.message);
    res.status(500).send("Server error while saving data");
  }
});

app.get("/readtrip", async (req, res) => {
  try {
    const data = await TripModel.find({}, 'username trip -_id');
    res.json(data);
  } catch (error) {
    console.error("Server error while reading data:", error.message);
    res.status(500).send("Server error while reading data");
  }
});

app.post("/writetrip", async (req, res) => {
  try {
    const { username, trip } = req.body;
    const newData = new TripModel({ username, trip });
    await newData.save();
  } catch (error) {
    console.error("Server error while saving data:", error.message);
    res.status(500).send("Server error while saving data");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
})