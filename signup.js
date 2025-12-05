function validateSignup() {
  let user = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let error = "";

  if (user.length === 0) {
    error += "❌ Username cannot be empty<br>";
  }

  if (!email.includes("@") || !email.includes(".com")) {
    error += "❌ Invalid email format<br>";
  }

  document.getElementById("error-box").innerHTML = error;

  return error === "";
}
