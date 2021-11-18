/**
 * User inputs numRounds
 * 
 * API greeting sequence  (120ms delay between each)
 * 
 * 4 second delay
 * 
 * API solution sequence request
 * 
 * ensure handling if server is down or wifi is out --> error gets caught
 * 
 * buttons play corresponding sounds
 * 
 * status message after each button press
 * 
 * win screen
 */

/**
 * Axios
 * 
 * require() to import npm
 * browserify & watchify
 * 
 * reminder -- this is instead of using <script> so you can get used to working with npm packages
 */

var preRoundDelay = 400,
    greetingDelay = 12,
    nextRoundDelay;

// taken- but learning from- David's code
var play = document.querySelector("#play");
play.addEventListener("click", function () {
    var numRounds = parseInt(document.querySelector("#rounds").value, 10),
    buttons = {};
  if(!Number.isInteger(numRounds)){
      numRounds = 10;
  }
    buttons.Red = new SimoneButton("#redSq", "sounds/red.wav", "red", "lightred");
    buttons.Blue = new SimoneButton("#blueSq", "sounds/blue.wav", "blue", "lightblue");
    buttons.Green = new SimoneButton("#greenSq", "sounds/green.wav", "green", "lightgreen");
    buttons.Yellow = new SimoneButton("#yellowSq", "sounds/yellow.wav","yellow","lightyellow");
});