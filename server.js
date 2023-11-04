const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dataFilePath = "data.json";

app.get("/interests", (req, res) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) throw err;
    const interests = JSON.parse(data);
    res.json(interests);
  });
});

app.post("/interests", (req, res) => {
  const newInterest = req.body.interest;
  fs.readFile(dataFilePath, (err, data) => {
    if (err) throw err;
    const interests = JSON.parse(data);
    interests.push(newInterest);
    fs.writeFile(dataFilePath, JSON.stringify(interests), (err) => {
      if (err) throw err;
      res.json({ success: true });
    });
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
