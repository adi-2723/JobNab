function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple validation
  if (email === "" || password === "") {
    alert("Please fill in both fields.");
    return;
  }

  // Simulate login process
  if (email === "test@example.com" && password === "password123") {
    alert("Login successful!");
    // Redirect to a dashboard or another page
    // window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

document.getElementById("forgotPassword").onclick = function (event) {
  event.preventDefault();
  toggleResetPassword();
};

function toggleResetPassword() {
  const modal = document.getElementById("resetPasswordModal");
  modal.style.display = modal.style.display === "none" ? "block" : "none";
}

function sendResetLink() {
  const resetEmail = document.getElementById("resetEmail").value;
  if (resetEmail === "") {
    alert("Please enter your email.");
  } else {
    alert("A password reset link has been sent to " + resetEmail);
    toggleResetPassword(); // Close modal after sending
  }
}
