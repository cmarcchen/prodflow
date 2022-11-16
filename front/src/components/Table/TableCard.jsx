import React from "react";
import { MapIcon, TagIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function TableCard({
  lineNumber,
  lineCategory,
  lineStatus,
  lineLocation,
}) {
  return (
    <div className="container  max-w-full flex  justify-between rounded border-b bg-slate-50 p-4 text-sm  hover:bg-white">
      <div className="container flex w-32 max-w-xs flex-col gap-1 rounded-md">
        <span className="font-bold text-blue-900 ">
          <Link
            to={lineNumber}
            className="hover:cursor-pointer hover:text-blue-500"
          >
            {lineNumber}
          </Link>
        </span>
        <span className="flex items-center gap-1 align-middle">
          <TagIcon className="h-4 w-4 text-gray-500" />
          {lineCategory}
        </span>
      </div>
      <div className="container flex w-32 max-w-sm flex-col gap-1">
        <div className="flex">
          <span className="flex-shrink-1 rounded-xl bg-green-300 px-3 font-bold text-green-900">
            {lineStatus}
          </span>
        </div>
        <span className="flex items-center gap-1 align-middle">
          <MapIcon className="h-4 w-4 text-gray-500" />
          {lineLocation}
        </span>
      </div>
    </div>
  );
}
