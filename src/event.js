const sleep = (ms = 200) => new Promise((res) => setTimeout(res, ms));

async function getEvent(req, res) {
  const message =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const words = message.split(" ");

  res.writeHead(200, {
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
    "Content-Type": "text/event-stream",
  });

  while (words.length) {
    await sleep();
    const word = words.splice(0, 1);
    res.write("event: answer\n\n");
    res.write(`data: ${word}\n\n`);
  }

  res.end();
}

export default getEvent;
