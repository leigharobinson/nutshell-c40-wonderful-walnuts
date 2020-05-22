import eventsAPI from "./eventsData.js";
import renderEntryLog from "./eventsDOM.js";

const displayEvents = eventsAPI.getEventEntries().then(renderEntryLog);

export default displayEvents;
