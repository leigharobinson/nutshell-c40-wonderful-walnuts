import userAPI from "./userData.js";

const logInUserEvent = () => {
	document
		.querySelector(".button__logIn")
		.addEventListener("click", (event) => {
			logInUser();
		});
};
const logInUser = () => {
	if (event.target.id === "button__logIn") {
		const users = userAPI.getUsers();
		const userName = document.querySelector("#userEmail").value;
		const knownUser = users.find((users = () => user.userName === userName));
		if (knownUser === undefined) {
			alert("who you be? Register, fool!");
		} else {
			sessionStorage.setItem("activeUser", knownUser.id);
		}
	}
};

export default logInUserEvent;
