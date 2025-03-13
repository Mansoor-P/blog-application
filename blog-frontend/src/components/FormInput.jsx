import React from "react";

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className="flex flex-col">
      {/* Label for the input */}
      {label && (
        <label htmlFor={name} className="text-gray-700 font-medium mb-1">
          {label}
        </label>
      )}

      {/* Input field */}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || label} // Default placeholder to label if not provided
        className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required={required}
      />
    </div>
  );
};

export default FormInput;
