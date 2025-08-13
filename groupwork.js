// Get elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn, .btn-op");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

// Append clicked button value to display
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.value += btn.textContent;
  });
});

// Calculate when "=" is clicked
equals.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
});

// Clear the display
clear.addEventListener("click", () => {
  display.value = "";
});
