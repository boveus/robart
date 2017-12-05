export { createPoints }

function createPoints() {
  let points = ''
  let times = Math.floor(Math.random() * 100) + 1;
  for(var i=0; i < times; i++){
    let num1 = Math.floor(Math.random() * 3500) + 1
    let num2 = Math.floor(Math.random() * 3500) + 1
    points += `${num1},${num2} `
  }
  return points.trim()
}
