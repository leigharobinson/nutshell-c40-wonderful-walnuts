//LR
import makeEventEntryComponent from "./eventsEntryComponent.js";

const eventEntryLog = document.querySelector(".container__Events");

const renderEntryLog = (entries) => {
  eventEntryLog.innerHTML = "";
  for (let i = 0; i < entries.length; i++) {
    eventEntryLog.innerHTML += makeEventEntryComponent(entries[i]);
  }
};

export default renderEntryLog;
