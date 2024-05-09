'use client';
import React, { useState } from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: HTMLInputElement['type'];
  maxLength?: number;
  id: string;
  error?: boolean;
  disabled?: boolean;
};

const Input = ({
  value,
  onChange,
  placeholder,
  type,
  id,
  maxLength,
  error = false,
  disabled,
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>(value);

  return (
    <input
      className={`
        ${error ? 'border-red-500 ' : 'border-gray-300 '}w-full p-2 border rounded-lg transition-all outline-none focus:border-blue-500
      `}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        onChange(e);
      }}
      placeholder={placeholder}
      type={type}
      id={id}
      maxLength={maxLength}
      disabled={disabled}
    />
  );
};

export default Input;
