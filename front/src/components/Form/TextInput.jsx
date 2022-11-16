import React from "react";

export function TextInput({ id, label, onChange, value }) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        onChange={onChange}
        value={value}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}
