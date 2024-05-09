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
  pattern?: string | RegExp;
  maxLength?: number;
  isError: boolean;
  setIsError: (value: boolean) => void;
  errorMessage: string;
  children?: React.ReactNode;
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
  isError = false,
  setIsError,
  errorMessage,
  children,
}: TextFieldProps) => {
  return (
    <div className={'flex flex-col relative w-full'}>
      <label htmlFor={id}>{label}</label>
      <div className={'flex gap-4'}>
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (pattern && e.target.value !== '') {
              const regExp = new RegExp(pattern);
              if (!regExp.test(e.target.value)) {
                setIsError(true);
              } else {
                setIsError(false);
              }
            } else {
              setIsError(false);
            }
          }}
          placeholder={placeholder}
          type={type}
          id={id}
          maxLength={maxLength}
          error={isError}
        />
        {children}
      </div>
      {isError && (
        <span className={'absolute top-full text-red-500 text-sm'}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default TextField;
