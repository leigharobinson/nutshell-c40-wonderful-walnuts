const chatDOM = (message) => {
	return `
      <section class="chat">
          <div class="chatUsername">${message.user.userName}:</div>
          <div class="chatContent">${message.message}  /${message.timeStamp}</div>
          <div class="chatEditButton">
            <button id="editChat--${chat.id}">Edit Chat</button>
          </div>
      </section>
  `;
};
export default chatDOM;
