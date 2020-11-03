const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('client'))

app.post('/', function (req, res) {

    // console.log('hi ', req.body)
    var converted = jsonToCSV(req.body.data)
    res.send(converted)
    });

    app.get('/', function (req, res) {
        // res.send('Hey hanadi, I am responding to your request!');
       });

       // convert json to csv 
function JsonToCSV (data){

	var id = Object.keys(data);
	var str = '';

    for (var i = 0; i < id.length; i++) {
        var line = '';
        for (var j in id[i]) {
            if (line != '') line += ','

            line += id[i][j];
        }

        str += line + '\r\n';
    }

    return str;
	}







app.listen(3000, function () {
 console.log("App listening on port 3000!");
});

