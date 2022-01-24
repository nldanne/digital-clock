'use strict';
function currentTime() {
  let date = new Date(); 
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if(hour < 10) {
    hour = '0' + hour;  // formatting is eg. 05 instead of 5
  } else {
    hour = hour;
  }

  if(minute < 10) {
    minute = '0' + minute;
  } else {
    minute = minute;
  }

  if (second < 10) {
    second = '0' + second;
  } else {
    second = second;
  }

  let display = document.getElementById("clock");
  display.innerText = hour + " : " + minute + " : " + second; 

  setTimeout(currentTime, 1000);
}

currentTime(); 
