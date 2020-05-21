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
		const userName = document.querySelector("#userEmail").value;
		userAPI.getUsers().then((users) => {
			console.log(users);
			const knownUser = users.find((user) => user.userName === userName);
			if (!knownUser) {
				alert("who you be? Register, fool!");
			} else {
				sessionStorage.setItem("activeUser", knownUser.id);
			}
		});
	}
};

export default logInUserEvent;
