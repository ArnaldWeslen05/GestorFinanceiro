require("dotenv").config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const { OpenAI } = require("openai");
const openai = new OpenAI(OPENAI_API_KEY);

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/pergunte-ao-chatgpt", async (req, res) => {
    const { prompt } = req.body;
    const model = "gpt-3.5-turbo";
    const max_tokens = 350; 

    const messages = [
        { role: "system", content: "Você é um assistente especializado em finanças. Responda apenas perguntas relacionadas a finanças, investimentos, economia e gestão financeira." },
        { role: "user", content: prompt }
    ];

    try {
        const completion = await openai.chat.completions.create({
            messages: messages,
            model: model,
            max_tokens: max_tokens,
        });
        res.json({ completion: completion.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(4000, () =>
    console.log("ChatGPT_Backend em execução na porta 4000")
);
