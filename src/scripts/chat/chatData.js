let chat = [];

const getChat = () => {
	return fetch("http://localhost:8088/messages")
		.then((res) => res.json())
    .then((parsedChat) => (chat = parsedChat));
}
    
    const editChat = () => {
   return fetch("http://localhost:8088/messages"
   method: "PUT",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify() 
    }
