'use client';

import React from 'react';
import Input from '@/components/atoms/Input';
import useDebounce from '@/hooks/useDebouncer';

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
  const validatePattern = (pattern: string | RegExp, value: string) => {
    if (typeof pattern === 'string') {
      return value === pattern;
    } else if (typeof pattern === 'object') {
      const regExp = new RegExp(pattern);
      return regExp.test(value);
    }
  };

  const debouncedSetIsError = useDebounce(setIsError, 300);

  return (
    <div className={'flex flex-col gap-1 relative w-full'}>
      <label className={'font-bold'} htmlFor={id}>
        {label}
      </label>
      <div className={'flex gap-4'}>
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (pattern && e.target.value !== '') {
              debouncedSetIsError(!validatePattern(pattern, e.target.value));
            } else {
              debouncedSetIsError(false);
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
