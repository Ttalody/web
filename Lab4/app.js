const express = require('express')
const app = express()
const port = 3000
var bodyParser = require("body-parser");
var fs = require("fs");
 
var jsonParser = bodyParser.json();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Lab4.html');
});

app.use(express.static(__dirname + "/public"));

// получение списка данных
app.get("/api/students", function(req, res){
      
    var content = fs.readFileSync(__dirname + '/public/students.json', "utf8");
    var users = JSON.parse(content);
    res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 
