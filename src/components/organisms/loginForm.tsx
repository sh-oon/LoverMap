'use client';

import React, { useState } from 'react';
import TextField from '@/components/molecules/TextField';
import Button from '@/components/atoms/Button';

const LoginForm = () => {
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    gender: 0,
    birth: '',
    phone: '',
  });
  const [validateError, setValidateError] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
    birth: false,
    phone: false,
  });

  return (
    <>
      <ul className={'flex flex-col gap-4'}>
        <div className="flex items-center justify-center w-[390px]">
          <TextField
            inputValue={''}
            setInputValue={(value) => {
              setRegisterForm({ ...registerForm, email: value });
            }}
            label={'이메일'}
            placeholder={'이메일을 입력해주세요.'}
            type={'email'}
            id={'email'}
            pattern={
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
            }
            isError={validateError.email}
            setIsError={(bool) => {
              setValidateError({ ...validateError, email: bool });
            }}
            errorMessage={'이메일 형식이 올바르지 않습니다.'}
          >
            <Button onClick={() => {}} label={'중복확인'} />
          </TextField>
        </div>
        <div className="flex items-center justify-center w-[390px]">
          <TextField
            inputValue={''}
            setInputValue={(value) => {
              setRegisterForm({ ...registerForm, password: value });
            }}
            label={'비밀번호'}
            placeholder={'비밀번호를 입력해 주세요.'}
            type={'password'}
            id={'password'}
            maxLength={20}
            isError={validateError.password}
            setIsError={(bool) => {
              setValidateError({ ...validateError, password: bool });
            }}
            errorMessage={'이메일 형식이 올바르지 않습니다.'}
          ></TextField>
        </div>
        <div className="flex items-center justify-center w-[390px]">
          <TextField
            inputValue={''}
            setInputValue={(value) => {
              setRegisterForm({ ...registerForm, passwordConfirm: value });
            }}
            label={'비밀번호 확인'}
            placeholder={'비밀번호를 다시 입력해 주세요.'}
            type={'password'}
            id={'passwordConfirm'}
            pattern={registerForm.password}
            isError={validateError.passwordConfirm}
            setIsError={(bool) => {
              setValidateError({ ...validateError, passwordConfirm: bool });
            }}
            errorMessage={'비밀번호가 일치하지 않습니다.'}
          ></TextField>
        </div>
      </ul>
    </>
  );
};

export default LoginForm;
