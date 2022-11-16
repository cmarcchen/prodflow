import React from "react";
import IndicatorCard from "./IndicatorCard";
import { countLines } from "../data/data-utils";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="mx-auto flex flex-col items-center gap-6 align-middle sm:flex-row">
              <IndicatorCard
                indicator="Number Production Lines"
                value={countLines()}
              />
              <IndicatorCard indicator="Total Capacity" value="1000 units/h" />
              <IndicatorCard indicator="Lines in use" value="10/14" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
