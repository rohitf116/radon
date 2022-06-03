const express = require("express");
const { param } = require("express/lib/request");
const router = express.Router();

const player = [
  {
    name: "harry",
    dob: "01/01/1991",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "marry",
    dob: "01/01/1991",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "Tarry",
    dob: "01/01/1990",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "Warry",
    dob: "01/01/1991",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "Kharry",
    dob: "01/01/1991",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
];

router.post("/players", function (req, res) {
  const data = req.body;
  const singlePlayer = player.filter((mov) => mov.name === data.name);

  singlePlayer.length
    ? res.send("Use another name")
    : player.push(data) && res.send({ data });
});

router.get("/testme", function (req, res) {
  res.send("test api");
});

module.exports = router;
