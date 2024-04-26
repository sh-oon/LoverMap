import React from 'react';
import { TState } from '@/types/task';

type ChipProps = {
  label: string;
  state: TState;
  onClick?: () => void;
};

const Chip = ({ label, state, onClick }: ChipProps) => {
  const color = () => {
    switch (state) {
      case 'progress':
        return 'border-blue-500 text-blue-500';
      case 'done':
        return 'border-green-500 text-green-800';
      case 'disabled':
        return 'border-gray-300 text-gray-500';
      case 'processing':
        return 'border-yellow-500 text-yellow-800';
      case 'error':
        return 'border-red-300 text-red-800';
      default:
        return 'border-gray-300 text-gray-800';
    }
  };

  return (
    <button
      className={`border-2 rounded-full min-w-4 text-sm py-1 px-4 ${color()}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Chip;
