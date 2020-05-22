let chat = [];

const useChat = () => chat.slice;

const getChat = () => {
	return fetch("http://localhost:8088/messages?_expand=user")
		.then((res) => res.json())
		.then((parsedChat) => {
			chat = parsedChat.slice();
		});
};

const saveChat = (chat) => {
	return fetch("http://localhost:8088/messages", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(chat),
	}).then(getChat);
};
export default { useChat, getChat, saveChat };
