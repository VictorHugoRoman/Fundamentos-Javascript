//para crear prototipos en javascript
//primero creamos una funcion que reciba los atributos
function Punto(x, y) {
  this.x = x
  this.y = y
}
//keyword "new" seguida de una funcion nos crea un objeto, le asigna el prototipo que
//le definamos ej: const p2 = new Punto(3, 0), ejecuta el cuerpo del metodo, retorna el objeto

Punto.prototype.moverEnX = function moverEnX(x) {
  this.x += x; //this hace referencia al objeto que javascript esta creando
}
//para retornar el objeto no es necesario usar el return
//ya que javascript lo retorna implicitamente con el this


//con Punto.prototype le agregamos los metodos al prototipo, le podemos poner o no nombre a las funcions
//es recomendable para que javascript nos el nombre de la funcion en caso que nos de errror
Punto.prototype.moverEnY = function moverEnY(y) {
  this.y += y
}

Punto.prototype.distancia = function distancia(p) {
  const x = this.x - p.x
  const y = this.y - p.y

  return Math.sqrt(x * x + y * y)
}

const p1 = new Punto(0, 4)

const p2 = new Punto(3, 0)


console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))
