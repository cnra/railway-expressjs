import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

let counter = 0;

app.get("/", async (req, res) => {
  counter++
  res.json({ Hello: "World " + counter });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
