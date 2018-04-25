function saludarGomez(nombre){
	console.log('Hola ${nombre} Gomez')
}
function saludarPerez(nombre){
	console.log('Hola ${nombre} Perez')
}
saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Jorge")

saludarPerez("Jorge")
saludarPerez("Pedro")
saludarPerez("Juan")

///*****Utilizando Clousure******
function saludarFamilia(apellido){//funcion recibe el appellido de la famio
	return function saludarMiembroDeFamilia(nombre){//a esta funcion se le conoce como funcion interna, que puede acceder al valor del parametro de la funcion externa
		console.log('Hola ${nombre} ${apellido}');//eso es lo q c conoce como clousure		
	}
}

//con clousure podemos acceder a los valores de la funcion externa
//saludarFamilia() retorna la funcion interna que la llameremos despues
//el cual esta  retornara el nombre y apellido, el valor de  appellido se retorna en la funcion interna(inner function)
//llamamos a saludarFamilia();
const saludarGomez = saludarFamilia("Gomez");//en este ejemplo la funcion interna se ejecutara con saludarGomez
const saludarPerez = saludarFamilia("Perez");
const saludarRomero = saludarFamilia("Romero");


saludarGomez("Pedro")//se ejecuta la funcion interna y accedo al apellido de la funcion externa, a esto se le conoce como clousure
saludarGomez("Juan")
saludarGomez("Jorge")


saludarPerez("Jorge")
saludarPerez("Pedro")
saludarPerez("Juan")

saludarRomero("Juan")


