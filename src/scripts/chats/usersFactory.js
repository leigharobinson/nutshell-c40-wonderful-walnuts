import usersAPI from "./userData.js";

// const registerContentTarget = document.querySelector(".register__Form");
// const logInContentTarget = document.querySelector(".logIn__Form");

const newUser = (userName, email, password) => ({
  userName: userName,
  email: email,
  password: password,
});

const addNewUserEvent = () => {
  document
    .querySelector(".button__register")
    .addEventListener("click", (event) => {
      createNewUser();
    });
};

const createNewUser = () => {
  if (event.target.id === "button__register") {
    let userName = document.querySelector("#userEmail").value;
    let email = document.querySelector("#userEmail").value;
    let password = document.querySelector("#userPassword").value;
    let passwordConfirm = document.querySelector("#userPasswordConfirm").value;
    if (
      userName === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      alert("Type shit, yo");
    } else if (password !== passwordConfirm) {
      alert("Passwords don't match");
    }
    let newUserEntry = newUser(userName, email, password);
    usersAPI.registerUsers(newUserEntry);
  }
};

export default addNewUserEvent;
