import { getRandomRgb } from '../helpers/random-color.js'
import { createPoints } from '../helpers/create-points.js'

class Polyline {
  constructor() {
    this.points = createPoints()
    this.stroke = getRandomRgb()
    this.fill = getRandomRgb()
    this.opacity = Math.random()
  }
}

export { Polyline }
