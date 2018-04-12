let superman ={
  nombre:"superman",
  vida:300,
  powerMax:60,
  powerMin:20

}
let batman ={
  nombre:"batman",
  vida:240,
  powerMax:80,
  powerMin:30
}
const Siguenconvida = (pj1, pj2) => superman.vida > 0 && batman.vida > 0
const golpe = (pj) => Math.round(Math.random()* (pj.powerMax-pj.powerMin)+pj.powerMin)


for (let i=0;Siguenconvida(superman,batman);i++) {
 console.log("Round: ${i+1}")
 let golpeSuperman =golpe(superman)
 batman.vida -= golpeSuperman
 let golpeBatman = golpe(batman)
 superman.vida -= golpeBatman
 console.log("superman golpea a batman con una fuerza de ${golpeSuperman} batman queda con una vida de: ${batman.vida}")
 console.log("batman golpea a superman con una fuerza de ${golpeBatman} batman queda con una vida de: ${superman.vida}")
}
if(superman.vida < 0 && batman.vida <0 ){
  console.log("La pelea ha quedado empate, su vida es menor a 0")
}
else if(superman.vida > 0){
  console.log("Superman ha derrotando a ${batman.nombre}. Su total de vida es: ${superman.vida}")
}
else {
console.log("batman ha derrotando a ${superman.nombre}. Su total de vida es: ${batman.vida}")
}
