import React from "react";

export default function IndicatorCard({ indicator, value }) {
  return (
    <div className="container mx-auto flex h-40 max-w-xs transform flex-col items-center space-y-4 rounded-lg border-gray-400 bg-slate-50 p-4 shadow-md transition hover:cursor-pointer hover:bg-slate-100">
      <h2 className="mb-4 text-center text-xl font-bold text-gray-800">
        {indicator}
      </h2>
      <span className="text-center text-2xl text-gray-700">{value}</span>
    </div>
  );
}
