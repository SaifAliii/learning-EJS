import { localsName } from "ejs";
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
const port = 5000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var firstName = req.body["fName"];
  var secondName = req.body["lName"];
  console.log(firstName);
  let numOfChars = firstName.length + secondName.length;
  res.render("index.ejs", { chars: numOfChars });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
