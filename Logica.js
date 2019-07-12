"use strict"


class Number{
 
  sum(valores){
    
    var resul = 0;
    valores.forEach(element => {
        resul = resul + element;
    })
    return resul
  }

  average(valores){

    var med = 0;
    med = valores.length;
    return med;

  }
}

module.exports = class Numbers extends Number{

  
  divide(a ,b){

    var divisao =0;
    divisao = a/b;
    return divisao;

    }
  }



  
  


//  calculadora.sum(controle);
  //calculadora.average(controle);
  //calculadora.divide(calculadora.sum(controle),calculadora.average(controle));
  //somatorio = calculadora.sum(controle);
  //divisao = calculadora.divide(calculadora.sum(controle),calculadora.average(controle));

  