'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateIconDefinition } from '@/utils/generateIcon';

type CheckboxProps = {
  id: string;
  checked: boolean;
};

const Checkbox = ({ id, checked }: CheckboxProps) => {
  return (
    <div
      className={`border w-6 h-6 rounded-md overflow-hidden items-center justify-center flex ${checked ? 'bg-blue-950' : 'bg-white'}`}
    >
      {checked && (
        <FontAwesomeIcon
          size={'lg'}
          color={'white'}
          icon={generateIconDefinition('check')}
        />
      )}
      {checked}
    </div>
  );
};

export default Checkbox;
