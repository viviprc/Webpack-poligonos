// Importamos los "objetos", desde cada uno de los módulos
import circulo from './Circulo.js'
import poligonos from './Poligono.js'
import rectangulo from './Rectangulo.js'
import triangulo from './Triangulo.js'
import octagono from './Octagono.js'
import decagono from './Decagono.js'

// Agregamos el evento al cambiar el selector y el condicional según la selección.
document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
   console.log(poligonos.getValues())
  let poligono = e.target.value
  if (poligono === 'circulo') {
    console.log(`Perímetro del Círculo ===> ${circulo.perimetro()}`)
    console.log(`Área del Círculo ===> ${circulo.area()}`)
  }
  if (poligono === 'rectangulo') {
    console.log(`Perímetro del Rectángulo ===> ${rectangulo.perimetro()}`)
    console.log(`Área del Rectángulo ===> ${rectangulo.area()}`)
  }
  if (poligono === 'triangulo') {
    console.log(`Perímetro del Triángulo ===> ${triangulo.perimetro()}`)
    console.log(`Área del Triángulo ===> ${triangulo.area()}`)
  }
  if (poligono === 'octagono') {
    console.log(`Perímetro del Octágono ===> ${octagono.perimetro()}`)
    console.log(`Área del Octágono ===> ${octagono.area()}`)
  }
  if (poligono === 'decagono') {
    console.log(`Perímetro del Decágono ===> ${decagono.perimetro()}`)
    console.log(`Área del Decágono ===> ${decagono.area()}`)
  }
})
