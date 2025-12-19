document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  // TODO: send login data to server API
  console.log("Logging in:", email, password);
  alert("Login attempted for " + email);
});
