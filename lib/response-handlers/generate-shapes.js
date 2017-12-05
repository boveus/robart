const $ = require('jquery')
import { circleHtml } from '../generate-shapes/circle-html.js'
import { rectangleHtml } from '../generate-shapes/rectangle-html.js'

$(document).ready(() => {
  $(document).on({
    click: function (event) {
      let circle = circleHtml()
      $('#main-svg').append(circle)
      console.log(circle)
      $('#svg-area').html($('#svg-area').html());
     }
  }, '#make-circle')

  $(document).on({
    click: function (event) {
      let rectangle = rectangleHtml()
      $('#main-svg').append(rectangle)
      console.log(rectangle)
      $('#svg-area').html($('#svg-area').html());
     }
  }, '#make-rectangle')
})
