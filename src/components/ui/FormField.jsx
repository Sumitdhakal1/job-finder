import React from "react";

const FormField = ({ label, type = "text", name, placeholder, options }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-600 uppercase">
        {label}
      </label>
      {options ? (
        <select
          name={name}
          className="w-full border rounded-lg p-3 h-11 text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder || `Select ${label}`}
          </option>
          {options.map((option) => (
            <option key={option.value}>{option.label}</option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full border rounded-lg p-3 h-11 text-sm"
        />
      )}
    </div>
  );
};

export default FormField;
