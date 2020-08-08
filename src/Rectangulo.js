import Poligono from './Poligono'

//Objeto rectángulo. Necesita "base" y "altura" desde polígonos para funcionar.
const rectangulo = {
   area() {
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return (base * altura)
  },
  perimetro() {
    console.log(this)
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return (base + altura) * 2
  }
}

export default rectangulo

