//LR
const makeEventEntryComponent = (eventEntry) => {
  return `
    <div class="event__Entry">
        <h3 class="name__event">${eventEntry.name}
        <h4 class="date__event">${eventEntry.date}</h4>
        <h4 class="location__event">${eventEntry.location}</h4>
        <div class="event__EntryEditDelete">
          <button class="button__edit" id="button__edit">Edit</button>
          <button class="button__delete" id="button__delete">Delete</button>
        </div>
    </div>  
    `;
};

export default makeEventEntryComponent;
