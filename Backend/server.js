const express = require("express");
const cors = require("cors");
require("dotenv").config();
const askAIRoutes = require("./routes/askAI");
const mongoose = require("mongoose");
const app = express();
const saveRoutes = require("./routes/savePrompt");

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});


app.use("/api", askAIRoutes);
app.use("/api", saveRoutes);

// Server start
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});