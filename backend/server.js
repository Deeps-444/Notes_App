//import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//loading environment variables
require("dotenv").config();

//initialize express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//basic test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

//define port
const PORT = process.env.PORT || 5000;

//connectinng routes to server
const noteRoutes = require("./routes/noteRoutes");
app.use("/notes", noteRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed", error);
  });
