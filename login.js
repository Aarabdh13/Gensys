function validateLogin() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let error = "";

  if (!email.includes("@") || !email.includes(".com")) {
    error += "❌ Invalid email format<br>";
  }

  document.getElementById("error-box").innerHTML = error;

  return error === "";
}
