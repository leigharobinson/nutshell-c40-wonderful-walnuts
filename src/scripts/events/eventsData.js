//LR

const eventsAPI = {
  getEventEntries() {
    return fetch("http://localhost:8088/events").then((response) =>
      response.json()
    );
  },
  saveEventEntry(newEventEntry) {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newEventEntry),
    });
  },
};

export default eventsAPI;
