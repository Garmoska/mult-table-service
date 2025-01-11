const express = require("express");

const router = express.Router();

function getRandomInteger() {
    return Math.floor(Math.random() * 9) + 1;
}

router.get("/exercise", async (req, res, next) => {
    console.log("exercise requested");

    const output = {v1: getRandomInteger(), v2: getRandomInteger(), result: v1 * v2};

    res.json(output);
});

module.exports = router;