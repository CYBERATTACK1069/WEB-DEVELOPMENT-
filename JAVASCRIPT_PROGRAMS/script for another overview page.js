// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link, .bar");

// Add fade transition to all navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Only prevent default if the link has an href attribute
    if (this.getAttribute("href")) {
      e.preventDefault(); // Prevent the default immediate navigation

      // Add the fade-out class to trigger the CSS transition
      document.body.classList.add("fade-out");

      // Wait for the transition to finish (500ms in this case)
      setTimeout(() => {
        window.location.href = this.getAttribute("href");
      }, 500);
    }
  });
});

// Theme toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  // Create toggle element if it doesn't exist
  let toggleContainer = document.querySelector(".toggle-container");

  if (!toggleContainer) {
    // Create the theme toggle elements if they don't exist in the HTML
    const themeToggle = document.createElement("div");
    themeToggle.className = "theme";
    themeToggle.innerHTML = `
      <div class="toggle-container">
        <input type="checkbox" id="toggle">
        <label for="toggle"></label>
      </div>
    `;

    // Add the theme toggle to the aside-bar
    const asideBar = document.querySelector(".aside-bar");
    if (asideBar) {
      asideBar.appendChild(themeToggle);
    }
  }

  // Get the toggle checkbox element
  const toggle = document.getElementById("toggle");
  if (!toggle) return;

  // Function to set theme
  const setTheme = (isDark) => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      toggle.checked = true;
    } else {
      document.documentElement.removeAttribute("data-theme");
      toggle.checked = false;
    }
  };

  // Load the saved theme from localStorage
  const savedTheme = localStorage.getItem("darkTheme");
  setTheme(savedTheme === "true");

  // Add an event listener to save the theme when changed
  toggle.addEventListener("change", function () {
    const isDark = this.checked;
    localStorage.setItem("darkTheme", isDark);
    setTheme(isDark);
  });

  // Also check for system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  prefersDark.addEventListener("change", (e) => {
    if (localStorage.getItem("darkTheme") === null) {
      setTheme(e.matches);
    }
  });
});
