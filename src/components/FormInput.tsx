import React from 'react';

interface FormInputProps {
  id: string;
  name: string;  // Add name prop
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  required?: boolean;
}

export default function FormInput({
  id,
  name,  // Add name to destructuring
  type,
  label,
  value,
  onChange,
  error,
  required = false,
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        id={id}
        name={name}  // Add name attribute
        type={type}
        required={required}
        className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
          error
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-700 focus:ring-purple-500 focus:border-purple-500'
        } bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2`}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}