const express = require('express');
const cors = require("cors");
const {r} = require("../database");
const router = express.Router();

router.use(cors());

router.get("/", async (req,res) => {
    r.db("books").table("literature").then((book) => {
        res.statusCode = 200;
        res.send({
            message: "Data extraction successful",
            code: 200,
            payload: book
        });
    }).catch((err) => {
        res.statusCode = 500;
        res.send({
            message: err.message,
            code: 500,
            payload: err
        });
    })
});

module.exports = router;
