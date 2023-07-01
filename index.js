const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const app = express();

app.engine("ejs",ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
})










app.listen(3000, () => {
    console.log("listening at http://localhost:3000");
})