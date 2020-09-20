const pos_aff = ["We’re all just work in progress.", "You are good enough.", "Do the things you think you can't do.", "Focus on your breathing.", "Forgive yourself for all the mistakes you've made.", "Happiness is within your grasp.", "Your every desire is achievable.", "You are a winner."];

var index;
for (var i=0; i<3; i++) {
  index = Math.floor(Math.random() * pos_aff.length);
  document.getElementById("positive").innerHTML += pos_aff[index] + "<br>";
  pos_aff.splice(index,1);
}

// Animate our penguin friend
function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("img mascot").src = images[x];
}
function startTimer() {
  setInterval(displayNextImage, 1500);
}
var images = [], x = -1;
images[0] = "images/penguinAsset 2-8.png";
images[1] = "images/penguinAsset 4-8.png";
images[2] = "images/penguinAsset 6-8.png";