// script.js
function startMode(mode) {
  // Initialize game with specific settings for each mode
  if (mode === "pvp") {
    // Code to start easy mode
  } else if (mode === "pve") {
    // Code to start medium mode
}

function showInstructions() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("instructions").style.display = "block";
}

function backToMenu() {
  document.getElementById("instructions").style.display = "none";
  document.getElementById("menu").style.display = "block";
}
