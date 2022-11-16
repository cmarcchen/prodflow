const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(express.json());

const lines = [
  {
    lineNumber: "INJ001",
    lineCategory: " Injectable",
    lineStatus: " In-Use",
    lineCapacity: 100,
    lineLocation: " Maisons-Alfort",
  },
  {
    lineNumber: "INJ002",
    lineCategory: " Injectable",
    lineStatus: " In-Use",
    lineCapacity: 100,
    lineLocation: " Maisons-Alfort",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/sites", (req, res) => {
  const sitesData = sites;
  res.send(sitesData);
});

app.get("/api/production-lines/", (req, res) => {
  const productionLinesData = lines;
  res.json(productionLinesData);
});

app.get("/api/production-lines/:productionLineId", (req, res) => {
  const { productionLineId } = req.params;
  const productionLineData = lines.filter(
    (line) => line.lineNumber === productionLineId
  );
  res.json(productionLineData);
});

app.post("/api/production-lines", (req, res) => {
  const { lineNumber, lineCategory, lineStatus, lineCapacity, lineLocation } =
    req.body;

  if (lineNumber === "") {
    res.send(404, "Invalid line number");
    return;
  }

  const lineIndex = lines.findIndex((line) => line.lineNumber === lineNumber);

  //new Line
  if (lineIndex < 0) {
    lines.push({
      lineNumber,
      lineCategory,
      lineStatus,
      lineCapacity,
      lineLocation,
    });
    res.send(lines[lineIndex]);
    return;
  }

  //update Line
  lines[lineIndex] = {
    lineNumber,
    lineCategory,
    lineStatus,
    lineCapacity,
    lineLocation,
  };
  res.send(lines[lineIndex]);
});

app.put("/api/production-lines/", (req, res) => {
  const { lineNumber, lineCategory, lineStatus, lineCapacity, lineLocation } =
    req.body;
  const lineIndex = lines.findIndex((line) => line.lineNumber === lineNumber);

  if (lineIndex < 0) {
    res.sendStatus(404);
    return;
  }

  lines[lineIndex] = {
    lineNumber,
    lineCategory,
    lineStatus,
    lineCapacity,
    lineLocation,
  };
  res.send(lines[lineIndex]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
