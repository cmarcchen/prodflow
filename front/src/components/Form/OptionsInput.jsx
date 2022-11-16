import React from "react";

export function OptionsInput({ id, label, options, onChange, value }) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        name={id}
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        onChange={onChange}
        value={value}
      >
        {options.map((option, index) => (
          <option key={option + index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
