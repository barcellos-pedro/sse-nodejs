import express from "express";
import getEvent from "./event.js";

const app = express();
const PORT = 8080;

app.use("/public", express.static("public"));

app.get("/", (req, res) => res.redirect("/public/index.html"));
app.get("/events", getEvent);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
