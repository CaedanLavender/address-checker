const express = require('express');
const app = express();
const path = require('path');
// const cors = require('cors');
const api = require('./routes/api');

app.use(express.static("client/build"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

app.use(api);

app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "/client", "build", "index.html"))
})

PORT = 3000;
app.listen(PORT, () => {
   console.log("Listening on port " + PORT);
});