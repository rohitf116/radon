const express = require('express');

const router = express.Router();
const logger=require('../logger/logger')
const helper=require('../util/helper')
const formatter=require('../validator/formatter')


router.get('/test-me', function (req, res) {
    //-----------------first assignment---------------------
    logger.welcome()


    // ----------------second assignment----------------------------
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()

    //-------------------Third assignment-----------------
    console.log(formatter.text.trim())
    console.log(formatter.text.toLocaleLowerCase())
    console.log(formatter.text.toLocaleUpperCase())
    res.send( `My first Api` )
});

module.exports = router;
// adding this comment for no reason