const express = require('express');
const {getBooks} = require("./categories");

const router = express.Router();

router.get('/literature', (req, res) => getBooks('literature')(req, res));
router.get('/philosophy', (req, res) => getBooks('philosophy')(req, res));
router.get('/culture', (req, res) => getBooks('culture')(req, res));
router.get('/psychology', (req, res) => getBooks('psychology')(req, res));
router.get('/history', (req, res) => getBooks('history')(req, res));
module.exports = router;
