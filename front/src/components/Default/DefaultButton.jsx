import React from "react";
import { classNames } from "../../utils";

export function DefaultButton({ type, color, onClick, children }) {
  return (
    <button
      type={type}
      className={classNames(
        color,
        "inline-flex  justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
