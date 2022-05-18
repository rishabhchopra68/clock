setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60;       // range 0 to 1
    const minRatio = (secondsRatio + currentDate.getMinutes())/60;      //range 0 to 1
    const hrsRatio = (minRatio + currentDate.getHours())/12;  // range 0 to 1
    
    setRotation(secondsRatio, secondHand)
    setRotation(minRatio, minuteHand)
    setRotation(hrsRatio, hourHand)
}

function setRotation(rotationRatio, element) {
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock();