var nombre = "Sacha"

function saludar10() {
  var nombre
  if (true) {
     nombre = "Eric"
  }
  
  console.log(`Hola ${nombre}`)
}

saludar("Sacha")
console.log(`La variable nombre tiene el valor ${nombre}`)


function saludarASacha10() {
  const nombre = "Sacha"
//sino definimos i con let podemos tener acceso a la variable fuera del ciclo 
  for (let i = 0; i < 10; i++) {//con let solo teneemos acceso a la variable / deontro del ciclo.
    console.log(`Hola ${nombre}`)
  }
  //1.1 manera incorreca
  for (var i = 0; i < 10; i++) {
    console.log(`Hola ${nombre}`)
  }
  console.log(`Hola ${i}`);
}
//1.1.1 que es lo moismo, de esta manera es como javascript interprerta las lineas (23 a 27) de codigo anteriores
var i;
 for (i = 0; i < 10; i++) {
    console.log(`Hola ${nombre}`)
  }
  console.log(`Hola ${i}`);
}

saludarASacha10()
