const express = require("express");

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const port = process.env.PORT || 3005;

app.use("/tasks", require("./routes/tasks"));

app.listen(port, () => {
    console.log("Server is running on port " + port);
});