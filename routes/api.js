const express = require('express');
const app = express();

const URL = "/api/"

app.get(URL + 'health', (req, res) => {
   res.sendStatus(200)
})


module.exports = app;