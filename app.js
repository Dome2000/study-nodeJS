const express = require('express');
const chalk = require('chalk');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port,()=>{
    console.log("Listening on port : " + port);
})