var express = require('express');
var app = express();
var router = require('./routing/routers')
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.set("port", process.env.PORT || 3000);

app.use(router)

/*Configuración de puerto de la app*/
app.listen(app.get("port"), function(error) {
    if (error == true) {
      console.log(error);
    }else{
      console.log("Node app is running on port", app.get("port"));
    }
  
    
  });