import React, { useState, useEffect } from "react";
import TableFooter from "./Table/TableFooter";
import TableCard from "./Table/TableCard";
import TableHeader from "./Table/TableHeader";
import { Outlet } from "react-router-dom";
import { getLines, countLines } from "../data/data-utils";

export default function Table() {
  const [page, setPage] = useState(1);
  const [lines, setLines] = useState([]);
  const [nbLines, setNbLines] = useState(0);

  useEffect(() => {
    getLines().then((lines) => setLines(lines));

    countLines().then((countLines) => setNbLines(countLines));
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <TableHeader
        tableHeaderTitle="Production Lines"
        tableHeaderButtonName="Create New Line"
      />

      {lines
        .filter(
          (element, index) => index >= (page - 1) * 10 && index < page * 10
        )
        .map((line) => (
          <TableCard key={line.lineNumber} {...line} />
        ))}

      <TableFooter nbObjects={nbLines} setPage={setPage} page={page} />

      <Outlet />
    </div>
  );
}
