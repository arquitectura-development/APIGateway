var express = require('express');
var app = express();
var router = require('./routing/routers')
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.use(router)

app.set("port", process.env.PORT || 3000);

/*Configuración de puerto de la app*/
app.listen(app.get("port"), function(error) {
    if (error == true) {
      console.log(error);
    }
  
    console.log("Node app is running on port", app.get("port"));
  });