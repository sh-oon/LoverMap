'use client';
import React, { useState } from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: HTMLInputElement['type'];
  maxLength?: number;
  pattern?: string;
  id: string;
};

const Input = ({
  value,
  onChange,
  placeholder,
  type,
  id,
  maxLength,
  pattern,
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>(value);

  return (
    <input
      className="w-full p-2 border border-gray-300 rounded-lg transition-all outline-none focus:border-blue-500"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        onChange(e);
      }}
      placeholder={placeholder}
      type={type}
      id={id}
      pattern={pattern}
      maxLength={maxLength}
    />
  );
};

export default Input;
