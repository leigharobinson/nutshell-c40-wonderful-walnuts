import logInForm from "./loginDOM.js";
import logInUserEvent from "./userLogInFactory.js";
import registerForm from "./registerDOM.js";
import addNewUserEvent from "./usersFactory.js";

const userLogInRegisterEvent = () => {
  document.querySelector(".targetThis").addEventListener("click", (event) => {
    // console.log("button clicked");
    if (event.target.id === "logIn") {
      logInForm().then(logInUserEvent());
    }
  });
};

//     } else if (event.target.id === "register") {
//       registerForm().then(addNewUserEvent());
//     }
//   });
// };

export default userLogInRegisterEvent;
