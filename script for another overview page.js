// Select the investment link (adjust the selector if needed)
const investmentLink = document.querySelector(
  'a[href="investment page CA.html"]'
);

investmentLink.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default immediate navigation

  // Add the fade-out class to trigger the CSS transition
  document.body.classList.add("fade-out");

  // Wait for the transition to finish (500ms in this case)
  setTimeout(() => {
    window.location.href = this.getAttribute("href");
  }, 500);
});

// Get the toggle checkbox element
const toggle = document.getElementById("toggle");

// Load the saved toggle state from localStorage
const savedState = localStorage.getItem("toggleState");
if (savedState === "true") {
  toggle.checked = true; // Set the checkbox to checked if saved state is true
}

// Add an event listener to save the toggle state when changed
toggle.addEventListener("change", function () {
  localStorage.setItem("toggleState", this.checked); // Save the current state
  if (this.checked) {
    console.log("Toggle is ON");
    // Additional actions when toggled on
  } else {
    console.log("Toggle is OFF");
    // Additional actions when toggled off
  }
});
