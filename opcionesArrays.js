/*Los arrays son una forma de guardar nuestros datos muy importante en JavaScript
Si queremos hacer una función que reciba N parámetros y devuelva la suma de estos, podemos escribirla como*/
//ssumas
//manera 1
function suma(...numeros) {
  return numeros.reduce(function (acum, numero) {
    acum += numero
    return acum
  }, 0)
}
//manera 2
function suma(...params) {
  return params.reduce((acumulativo, actual) => {acumulativo + actual}, 0)
}
//manera 3
const suma = (...numbers)=>numbers.reduce((acum,number)=>acum+=number,0)//el parametro zerO puede o no ir

//dobles
//manera 1
function doble(...params) {
  return params.map(x=>x*2)
}
//manera 2
const dobles = (...numeros) => numeros.map(numero => numero * 2)

//pares
//manera 1
function pares(...numeros){
	const resultado=[];
	const length = numeros.length;
	for(let i=0; i<length;i++){
		const numero=numeros[i];
		if(numero%2==0){
			resultado.push(numero)
		}
	}
	return resultado;
}
//manera 2
function pares(...numeros){
	return numeros.filter(function (numero){
		return numero % 2 ==0;
	});
}
//manera 3
const pares(...numeros) => numeros.filter(numero => numero %2 == 0)

//notas, Grcs JMontanoS PLATZI
//ARRAY.reduce recibe 3 parámetros, 1. acumulador, 2.itera con cada campo del array, 3. es un indice … 
//sacha lo usar para sumar todos los numeros del array “numeros” pero podemos hacer las 4 operaciones matemáticas, ejemp:
const suma = (...numeros) => numeros.reduce((acum, indi) => acum+indi);
const resta= (...numeros) => numeros.reduce((acum, indi) => acum-indi);
const mulp= (...numeros) => numeros.reduce((acum, indi) => acum*indi);
const div = (...numeros) => numeros.reduce((acum, indi) => acum/indi);

//ARRAY.map recibe un solo parámetro que interaactura con la operacion matematica que elijamos, sacha lo usa para sacar el 
//doble del numero pero podemos sumar una constante a cada array o restarla, ejemp:
const sumarCons =(...numeros) => numeros.map(numero => numero+2);
const restCons=(...numeros) => numeros.map(numero => numero-2);
const varXArray=(...numeros) => numeros.map(numero => numero*Variable);
const dobles =(...numeros) => numeros.map(numero => numero*2);
//ARRAY.filter para mi es casi igual a map pero en este caso se ejecuta una condicional con el parametro que recibe.


//MAS EJEMPLOS
const mayor= (...numeros) => numeros.filter( numero => numero < 5);
const menor= (...numeros) => numeros.filter( numero => numero > 5);
const iguales= (...numeros) => numeros.filter( numero => numero  == 5);

const suma = (...numeros) => numeros.reduce((acum, numero) => acum += numero)

const resta = (...numeros) => numeros.reduce((acum, numero) => acum -= numero)

const multiplicar = (...numeros) => numeros.reduce((acum, numero) => acum *= numero)

const dividir = (...numeros) => numeros.reduce((acum, numero) => acum /= numero)

const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)

const impares = (...numeros) => numeros.filter(numero => numero % 2 !== 0)

const multiplo5 = (...numeros) => numeros.filter(numero => numero % 5 == 0)

const cuadrados = (...numeros) => numeros.map(numero => Math.pow(numero, 2))

const raices = (...numeros) => numeros.map(numero => Math.sqrt(numero).toFixed(2))

const euler = (...numeros) => numeros.map(numero => Math.exp(numero).toFixed(2))

const logaritmoBase10 = (...numeros) => numeros.map(numero => Math.log10(numero).toFixed(2))


