const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.send("Hey, I am responding to your request!");
   });



app.listen(3000, function () {
 console.log("App listening on port 3000!");
});

