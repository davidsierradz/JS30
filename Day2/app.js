var date = new Date();
var degrees_seconds = date.getSeconds()*6;
var degrees_minutes = date.getMinutes()*6;
var degrees_hours = date.getHours()*30;

setInterval(rotateClock, 1000);

function rotateClock() {
  document.getElementById("seconds").style
    .transform = "rotate("+degrees_seconds+"deg)";
  document.getElementById("minutes").style
    .transform = "rotate("+degrees_minutes+"deg)";
  document.getElementById("hours").style
    .transform = "rotate("+degrees_hours+"deg)";
  degrees_seconds += 6;
  if (degrees_seconds == 360) {
    degrees_seconds = 0;
    degrees_minutes += 6;
    if (degrees_minutes == 360) {
      degrees_minutes = 0;
      degrees_hours += 30;
    }
  }
}
