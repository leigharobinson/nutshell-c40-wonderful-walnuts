import eventsAPI from "./eventsData.js";
import renderEntryLog from "./eventsDOM.js";
import eventEntryForm from "./eventsEntryDOM.js";
//LR
const addEventEntry = (name, date, location) => ({
  name: name,
  date: date,
  location: location,
});

const eventRegisterForm = () => {
  document
    .querySelector("#button--addEvent")
    .addEventListener("click", (event) => {
      eventEntryForm();
      createEventEntry();
    });
};

const createEventEntry = () => {
  document
    .querySelector("#button__addEvent")
    .addEventListener("click", (event) => {
      const name = document.querySelector("#eventName").value;
      const date = document.querySelector("#eventDate").value;
      const location = document.querySelector("#eventLocation").value;

      const newEventEntry = addEventEntry(name, date, location);

      if (name === "" || date === "" || location === "") {
        alert("Please fill out event form");
      } else
        eventsAPI
          .saveEventEntry(newEventEntry)
          .then(eventsAPI.getEventEntries)
          .then(renderEntryLog);

      document.querySelector("#eventName").value = "";
      document.querySelector("#eventDate").value = "";
      document.querySelector("#eventLocation").value = "";
    });
};
export default eventRegisterForm;
