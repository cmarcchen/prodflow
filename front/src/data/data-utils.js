export async function countLines() {
  const lines = await getLines();
  return lines.length;
}

export async function findLine(lineNumber) {
  const lines = await getLines();
  const lineData = lines.filter((line) => line.lineNumber === lineNumber)[0];
  console.log(lineData);
  return lineData;
}

export async function getLines() {
  const response = await fetch("http://localhost:3000/api/production-lines");
  const lines = await response.json();
  return lines;
}
