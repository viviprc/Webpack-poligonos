import Poligono from './Poligono'

//Objeto círculo. Necesita "radio" desde polígonos para funcionar.
const circulo = {
  area() {
    let radio = Poligono.valores()[4]
    return Math.pow(radio, 2) * Math.PI
  },
  perimetro() {
    console.log(this)
    let radio = Poligono.valores()[4]
    return Math.PI * 2 * radio
  }
}

export default circulo
