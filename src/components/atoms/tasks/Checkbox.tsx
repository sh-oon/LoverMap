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
    <div className={'border w-6 h-6'}>
      {checked && (
        <FontAwesomeIcon
          className={'w-full h-full bg-blue-950'}
          size={'xl'}
          color={'white'}
          icon={generateIconDefinition('check')}
        />
      )}
      {checked}
    </div>
  );
};

export default Checkbox;
