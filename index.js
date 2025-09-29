const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views",  path.join(__dirname, "/views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/ig/:username", (req, res) => {
    const followers = ["Ayush", "Ashu", "Suman", "Rajkumar"];
    let {username} = req.params;
res.render("instagram", {username , followers} );
});

app.get("/hello", (req, res) => {
    res.send("hello ayush");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 10) + 1;
    res.render("rolldice" , {diceVal});
});

app.listen(port, () => {
    console.log(`listen on port ${port}`);
    
});