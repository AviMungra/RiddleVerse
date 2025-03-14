import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Serving static files to Express
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        // GET Request to "riddles api" using Axios
        const response = await axios.get("https://riddles-api.vercel.app/random");

        // Rendering EJS template using the response from the GET request to "riddles api"
        res.render("index.ejs", {
            riddle: response.data.riddle,
            answer: response.data.answer,
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
