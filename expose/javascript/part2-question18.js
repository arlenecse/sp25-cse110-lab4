// Modify code so that it prints out current time every second
function currentTime() {    
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

setInterval(currentTime, 1000);
