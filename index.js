/*
 * File: index.js
 * Project: bmstest
 * File Created: Sunday, 9th December 2018 2:26:50 pm
 * Author: huynguyen (qhquanghuy96@gmail.com)
 * -----
 * Last Modified: Sunday, 9th December 2018 2:32:20 pm
 * Modified By: huynguyen (qhquanghuy96@gmail.com)
 * -----
 */





const express = require('express');

const app = express();


app.get("/", (req, res) => {
    res.send("hello, world")
})

