window.onload = function() {
    document.getElementById("first-name").focus();
  };
  // Get the password and confirm password input fields
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

// Get the error message element
const errorMessage = document.querySelector(".error-message");

// Function to check if the passwords match
const checkPasswords = () => {
// Compare the values of the password and confirm password input fields
if (passwordInput.value !== confirmPasswordInput.value) {
  // If the passwords don't match, add the error class to the input fields and show the error message
  passwordInput.classList.add("error");
  confirmPasswordInput.classList.add("error");
  errorMessage.style.display = "block";
} else {
  // If the passwords match, remove the error class from the input fields and hide the error message
  passwordInput.classList.remove("error");
  confirmPasswordInput.classList.remove("error");
  errorMessage.style.display = "none";
}
};

// Check the passwords when the page loads
checkPasswords();

// Check the passwords when the input fields change
passwordInput.addEventListener("change", checkPasswords);
confirmPasswordInput.addEventListener("change", checkPasswords);

// Get the form element
const form = document.getElementById("signup-form");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
// Prevent the form from being submitted
event.preventDefault();

// Validate the form
if (formIsValid()) {
  // If the form is valid, submit it
  form.submit();
}
});

// Function to check if the form is valid
function formIsValid() {
// Check the values of the input fields and return true if they are valid, false if they are not
return true;
}