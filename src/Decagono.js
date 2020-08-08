import Poligono from './Poligono'

//Objeto octágono. Necesita "lado" y "apotema" desde polígonos para funcionar.
const decagono = {
  area() {
    let lado = Poligono.valores()[1]
    let apotema = Poligono.valores()[3]
    return (lado * 10) * apotema /2
  },
  perimetro() {
    console.log(this)
    let lado = Poligono.valores()[1]
    return lado * 10
  }
}

export default decagono
