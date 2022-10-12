const _ = require("lodash");
const { MongoClient } = require("mongodb");
const express = require("express");
const { connectMongoDb, getAllSites, insertSite } = require("./db_utils");

const app = express();
const port = 3000;

var siteData = {
  name: "Site1",
  adress: "Villejuif",
  productionLines: [
    {
      lineNumber: "A",
      unitsPerMinute: 100,
    },
    {
      lineNumber: "B",
      unitsPerMinute: 200,
    },
  ],
};

connectMongoDb();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  let data = {
    age: 22,
    name: "Jane",
  };
  res.json(data);
});

app.get("/site-info", async (req, res) => {
  let data = await getAllSites();
  res.json(data);
});

app.post("/post-example", (req, res) => {
  res.send("data received");
});

app.post("/new-production-site", async (req, res) => {
  const newLine = req.body;
  console.log(newLine);
  await insertSite(newLine);

  res.sendStatus(201);
});

app.put("/production-line/:id/update", (req, res) => {
  const id = req.params.id;
  const lineIndex = _.findIndex(siteData.productionLines, ["lineNumber", id]);

  if (lineIndex >= 0) {
    const unitsPerMinute = req.body.unitsPerMinute;
    console.log(typeof unitsPerMinute);
    siteData.productionLines[lineIndex].unitsPerMinute = unitsPerMinute;
  } else {
    res.sendStatus(404);
  }

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
