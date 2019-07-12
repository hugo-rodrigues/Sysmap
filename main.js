var nm = require('./Logica.js');
var sr = require('./server.js');
var valor= new nm();
var svr = new sr();
var values = [1,2,3,4,5];

var jazon = { somatorio : valor.sum(values,0), mediaAritmética : valor.divide(valor.sum(values,0),valor.average(values)) }
console.log(jazon);
console.log(svr.colocar(jazon));














