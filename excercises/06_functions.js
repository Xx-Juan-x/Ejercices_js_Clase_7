/*Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

/*function suma(sum1, sum2){
    var resultado;
    resultado = sum1 + sum2;
    return resultado;
}
console.log("El resultado es: " + suma(50, 60));*/


/*A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene
error y retornar el valor NaN como resultado.*/

/*function suma(sum1, sum2){
    if(isNaN(sum1) || isNaN(sum2)){
        alert ("Uno de los parametros tiene error");
        return NaN;
    }
    else{
        var resultado = sum1 + sum2;
        return resultado;
    }
}
console.log("El resultado es: " + suma("string", 60));
console.log("El resultado es: " + suma(45, 25));*/

/*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado).*/

/*function suma(sum1, sum2){
    if(isNaN(sum1) || isNaN(sum2)){
        alert ("Uno de los parametros tiene error");
        return NaN;
    }
    else if(!Number.isInteger(sum1) || !Number.isInteger(sum2)){
        alert("Se encuentran decimales en uno de los dos parámetros");
        return Math.round(sum1) + Math.round(sum2);
    }else{
        var resultado = sum1 + sum2;
        return resultado;
    }
}
console.log("El resultado es: " + suma("string", 60));
console.log("El resultado es: " + suma(45, 25));
console.log("El resultado es: " + suma(32.7, 22.7));*/





