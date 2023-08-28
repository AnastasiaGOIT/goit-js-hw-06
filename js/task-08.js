const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", getUserData);

function getUserData(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };

  if (data.email === "" || data.password === "") {
    return alert("Please fill in all the fields!");
  } else {
    console.log(data);
    form.reset();
  }
}
