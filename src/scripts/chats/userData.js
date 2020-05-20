let users = [];

const userAPI = {
  getUsers() {
    return fetch("http://localhost:8088/users").then(
      (response) => response.json
    );
  },
  registerUsers(newUser) {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  },
};

export default userAPI;