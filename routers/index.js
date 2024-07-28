const express = require('express');
const literature = require("./literature");
const philosophy = require("./philosophy");
const culture = require("./culture");
const psychology = require("./psychology");
const history = require("./history");

const router = express.Router();

router.use('/literature', literature);
router.use('/philosophy', philosophy);
router.use('/culture', culture);
router.use('/psychology', psychology);
router.use('/history', history);

module.exports = router;
