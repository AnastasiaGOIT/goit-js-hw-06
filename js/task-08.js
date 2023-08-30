const form = document.querySelector(".login-form");

form.addEventListener("submit", getUserData);

function getUserData(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  if (data.email.trim() === "" || data.password.trim() === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(data);
  event.currentTarget.reset();
}
