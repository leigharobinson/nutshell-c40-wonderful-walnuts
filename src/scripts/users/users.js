import addNewUserEvent from "./usersFactory.js";
import logInUserEvent from "./userLogInFactory.js";

const outputEl = document.querySelector(".targetThis");

const logInForm = () => {
	document
		.querySelector(".logIn__Register")
		.addEventListener("click", (event) => {
			console.log("button clicked");
			if (event.target.id === "logIn") {
				outputEl.innerHTML = `
            <div class="logIn__form">
                <h3>Log in to Nutshell!</h3>
                <form action="" id="">
                    <fieldset>
                        <label for="userEmail">Enter e-Mail</label>
                        <input type="text" name="userEmail" id="userEmail"></input>
                    </fieldset>
                    <fieldset>
                        <label for="userPassword">Enter Password</label>
                        <input type="text" name="userPassword" id="userPassword"></input>
                    </fieldset>
                </form>
                <button class="button__logIn" id="button__logIn">Log In</button>
            </div>
        `;
			} else {
				outputEl.innerHTML = `
        <div class="register__Form">
            <h3>Treat yo'self to Nutshell!</h3>
            <form action="" id="">
                <fieldset>
                    <label for="userEmail">Enter e-Mail</label>
                    <input type="text" name="userEmail" id="userEmail"></input>
                </fieldset>
                <fieldset>
                    <label for="userPassword">Enter Password</label>
                    <input type="text" name="userPassword" id="userPassword"></input>
                </fieldset>
                <fieldset>
                    <label for="userPasswordConfirm">Confirm Password</label>
                    <input type="text" name="userPasswordConfirm" id="userPasswordConfirm"></input>
                </fieldset>
            </form>
            <button class="button__register" id="button__register">Register</button>
        </div>
    `;
			}
			logInUserEvent();
			addNewUserEvent();
		});
};
export default logInForm;
