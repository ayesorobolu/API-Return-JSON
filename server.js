import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get( "/", (req, res) => {
res.json({
email:"abrahamayesoro@gmail.com",
current_datetime: new Date().toISOString(),
github_url: "https://github.com/ayesorobolu/API-Return-JSON"
})
})

app.listen(6000, () => {
    console.log("Server running on http://localhost: 6000")
});