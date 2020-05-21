const outputEl = document.querySelector(".logIn__Register");

const registerForm = (outputEl.innerHTML = `
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
`);

export default registerForm;
