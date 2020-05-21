import logInForm from "./loginDOM.js";
import logInUserEvent from "./userLogInFactory.js";
import registerForm from "./registerDOM.js";
import addNewUserEvent from "./usersFactory.js";

const userLogInRegisterEvent = () => {
  document.querySelector(".targetThis").addEventListener("click", (event) => {
    if (event.target.id === "logIn") {
      logInForm();
      logInUserEvent();
    } else if (event.target.id === "register") {
      registerForm();
      addNewUserEvent();
    }
  });
};

export default userLogInRegisterEvent;
