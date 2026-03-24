const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/ask-ai", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:3000", // required sometimes
                    "X-OpenRouter-Title": "MERN AI App",
                },
            }
        );

        const aiResponse = response.data.choices[0].message.content;

        res.json({ answer: aiResponse });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
});

module.exports = router;