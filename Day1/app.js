var boom = document.getElementById("boom");
var clap = document.getElementById("clap");
var hihat = document.getElementById("hihat");
var kick = document.getElementById("kick");
var openhat = document.getElementById("openhat");
var ride = document.getElementById("ride");
var snare = document.getElementById("snare");
var tink = document.getElementById("tink");
var tom = document.getElementById("tom");


var boomElement = document.getElementById("boomElement");
var clapElement = document.getElementById("clapElement");
var hihatElement = document.getElementById("hihatElement");
var kickElement = document.getElementById("kickElement");
var openhatElement = document.getElementById("openhatElement");
var rideElement = document.getElementById("rideElement");
var snareElement = document.getElementById("snareElement");
var tinkElement = document.getElementById("tinkElement");
var tomElement = document.getElementById("tomElement");
//clap.addEventListener("ended", function (event) {
  //clapElement.classList.remove("playing");
//}, true);

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "a":
      clapElement.classList.add("playing");
      clap.currentTime = 0;
      clap.play();
      break;
    case "s":
      hihatElement.classList.add("playing");
      hihat.currentTime = 0;
      hihat.play();
      break;
    case "d":
      kickElement.classList.add("playing");
      kick.currentTime = 0;
      kick.play();
      break;
    case "f":
      openhatElement.classList.add("playing");
      openhat.currentTime = 0;
      openhat.play();
      break;
    case "g":
      boomElement.classList.add("playing");
      boom.currentTime = 0;
      boom.play();
      break;
    case "h":
      rideElement.classList.add("playing");
      ride.currentTime = 0;
      ride.play();
      break;
    case "j":
      snareElement.classList.add("playing");
      snare.currentTime = 0;
      snare.play();
      break;
    case "k":
      tomElement.classList.add("playing");
      tom.currentTime = 0;
      tom.play();
      break;
    case "l":
      tinkElement.classList.add("playing");
      tink.currentTime = 0;
      tink.play();
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  //event.preventDefault();
});

window.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "a":
      clapElement.classList.remove("playing");
      break;
    case "s":
      hihatElement.classList.remove("playing");
      break;
    case "d":
      kickElement.classList.remove("playing");
      break;
    case "f":
      openhatElement.classList.remove("playing");
      break;
    case "g":
      boomElement.classList.remove("playing");
      break;
    case "h":
      rideElement.classList.remove("playing");
      break;
    case "j":
      snareElement.classList.remove("playing");
      break;
    case "k":
      tomElement.classList.remove("playing");
      break;
    case "l":
      tinkElement.classList.remove("playing");
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  //event.preventDefault();
});
