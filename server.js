const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("main"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "main", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на <http://localhost>: ${PORT}`);
});


const math = require("./scriptModules/math");

console.log(math.add(5, 4));
console.log(math.subtract(8, 2));