'use client';

import React from 'react';
import TextField from '@/components/molecules/TextField';

const LoginForm = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <TextField
          inputValue={''}
          setInputValue={() => {}}
          label={'Email'}
          placeholder={'Email'}
          type={'email'}
          id={'email'}
          pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'}
        />
        <button>중복확인</button>
      </div>
    </>
  );
};

export default LoginForm;
