const express = require("express");
const router = express.Router();
const Prompt = require("../models/user_prompt");

router.post("/save", async (req, res) => {
  try {
    const { prompt, response } = req.body;

    if (!prompt || !response) {
      return res.status(400).json({ error: "All fields required" });
    }

    const newData = new Prompt({ prompt, response });
    await newData.save();

    res.json({ message: "Saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving data" });
  }
});

router.get("/history", async (req, res) => {
  try {
    const data = await Prompt.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

module.exports = router;