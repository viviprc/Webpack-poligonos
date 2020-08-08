import Poligono from './Poligono'

//Objeto octágono. Necesita "lado" y "apotema" desde polígonos para funcionar.
const octagono = {
  area() {
    let lado = Poligono.valores()[1]
    let apotema = Poligono.valores()[3]
    return (lado * 8) * apotema /2
  },
  perimetro() {
    console.log(this)
    let lado = Poligono.valores()[1]
    return lado * 8
  }
}

export default octagono
