const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const ampm = document.querySelector('.ampm')

function digitalClock(){
let d = new Date();
let h =d.getHours();;

let am_pm = h>=12 ? 'AM':'PM'
 if (h >= 12) h = h - 12;

hour.innerText =h;
minute.innerText = d.getMinutes()

second.innerText = d.getSeconds()
ampm.innerText = am_pm
console.log(d);
}

setInterval(()=>{
    digitalClock();
},1000)