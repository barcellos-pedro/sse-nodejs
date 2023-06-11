const methods = {
  onOpen(event) {
    console.log("Connection open\n", event);
  },
  onError(err) {
    console.error(err);
  },
  onMessage(event) {
    console.log(event.data);
  },
};

export default function useEventSource(actions = methods, url = "/events") {
  const eventSource = new EventSource(url);
  eventSource.addEventListener("open", actions.onOpen);
  eventSource.addEventListener("message", actions.onMessage);
  eventSource.addEventListener("error", actions.onError);
  return eventSource;
}
