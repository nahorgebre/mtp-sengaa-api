import express from "express";
const app = express();

app.get("/", (req, res, next) => {
    res.send("test");   
});

app.get("/tours", (req, res, next) => {
    res.send("Get a list of tours...");   
});

app.get("/post", (req, res, next) => {
    res.send("Add a new tour...");   
});

app.listen(process.env.PORT || 8091, () => {console.log("Server started!")})
