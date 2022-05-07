const express = require('express');
const path = require("path");

const app = express()
const port = 3000;
console.log(path.join(__dirname, '../dist'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, '../dist/calculator/')));

app.use("/api", require("./routes"));

app.get('*', (req, res) => {
    res.status(404).send("not found");
});
app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`)
});