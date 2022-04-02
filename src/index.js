const { response } = require("express");
const express = require("express");

const app = express();

//localhost
app.get("/", (request, response) => {
  return response.json({ message: "executou corretamente" });
});

app.listen(3333);
