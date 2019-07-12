var express = require('express');
var app = express();
var fs = require("fs");





module.exports = class Inserir{

    //http://127.0.0.1:8081/


      colocar(valor){
         
         fs.writeFile("./contas.json", JSON.stringify(valor), (err) => {
            if (err) {
               console.error(err);
               return 0;
            };
            console.log("File has been created");
         });
         
         app.get('/200', function (req, res) {
            
            fs.readFile( __dirname + "/" + "contas.json", 'utf8', function (err, data) {
             
            res.end( data );
            });
         });

        
        }
        

      }

      
    
         
        
        
      
      

         
      
   

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
})


