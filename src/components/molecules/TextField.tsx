'use client';

import React from 'react';
import Input from '@/components/atoms/Input';

type TextFieldProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  label: string;
  placeholder: string;
  type?: HTMLInputElement['type'];
  id: string;
  pattern?: string;
  maxLength?: number;
};

const TextField = ({
  inputValue,
  setInputValue,
  label,
  placeholder,
  type = 'text',
  id,
  pattern,
  maxLength,
}: TextFieldProps) => {
  return (
    <div className={'flex flex-col gap-2'}>
      <label htmlFor={id}>{label}</label>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        type={type}
        id={id}
        pattern={pattern}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextField;
