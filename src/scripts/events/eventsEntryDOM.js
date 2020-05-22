//LR

// import eventsAPI from "./eventsData.js";

const outputElEvent = document.querySelector(".container__CreateEvent");

const eventEntryForm = () =>
  (outputElEvent.innerHTML = `
<div class="form__Event">
    <h3>Event Form</h3>
    <form action="" id="">
        <fieldset>
            <lable for="eventName">Enter Event Name</lable>
            <input type="text" name="eventName" id="eventName"></imput>
        </fieldset>
        <fieldset>
            <lable for="eventDate">Select Date of Event</lable>
            <input type="date" name="eventDate" id="eventDate"></imput>
        </fieldset>
        <fieldset>
            <lable for="eventLocation">Enter Event Location</lable>
            <input type="text" name="eventLocation" id="eventLocation"></imput>
        </fieldset>
    </form>
    <button class="button__addEvent" id="button__addEvent">Save Event</button>
</div>
`);

export default eventEntryForm;
