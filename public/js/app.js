import useEventSource from "./events.js";

let eventSource;
const openButton = document.querySelector("button#open");
const closeButton = document.querySelector("button#close");
const messageElement = document.querySelector("p");

const eventActions = {
  onOpen(event) {
    console.log("Connection open\n", event);
  },
  onError(err) {
    console.error("Event error\n", err);
    eventSource.close();
  },
  onMessage(event) {
    console.log('event\n', event)
    messageElement.textContent += ` ${event.data}`;
  },
};

openButton.addEventListener("click", () => {
  messageElement.textContent = "";
  eventSource = useEventSource(eventActions);
});

closeButton.addEventListener("click", () => {
  eventSource.close();
});
