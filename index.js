setInterval(setClock, 1000)
setInterval(timeTableClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const timeBoard = document.querySelector(".time__table--span")

function timeTableClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() < 10 ? "0" + currentDate.getSeconds() : currentDate.getSeconds() 
  const minutesRatio = currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes()
  const hoursRatio = currentDate.getHours() < 10 ? "0" + currentDate.getHours() : currentDate.getHours()
   
  timeBoard.innerHTML = `${hoursRatio} : ${minutesRatio} : ${secondsRatio}`
}

function setClock() {  
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
timeTableClock()