function checkTerms() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match! Please try again.");
  } else {
    toggleTerms(); // Show terms and conditions modal if passwords match
  }
}

function toggleTerms() {
  const modal = document.getElementById("termsModal");
  modal.style.display = modal.style.display === "none" ? "block" : "none";
}

function confirmTerms() {
  if (document.getElementById("acceptTerms").checked) {
    toggleTerms();
    document.getElementById("registrationForm").submit(); // Submit the form if terms accepted
  } else {
    alert("You must agree to the terms.");
  }
}
