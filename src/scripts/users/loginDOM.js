const outputEl = document.querySelector(".targetThis");

const logInForm = () =>
	(outputEl.innerHTML = `
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
    `);

export default logInForm;
