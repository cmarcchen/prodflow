import React from "react";
import { classNames } from "../../utils";

export default function PageSwitch({ children, isActive, onClick }) {
  return (
    <a
      onClick={onClick}
      aria-current="page"
      href="#"
      className={classNames(
        isActive
          ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
          : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50",
        "relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20 hover:cursor-pointer"
      )}
    >
      {children}
    </a>
  );
}
