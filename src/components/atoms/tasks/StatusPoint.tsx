import React from 'react';
import { TSize, TStatus } from '@/types/task';

type StatusPointProps = {
  status: TStatus;
  empty: boolean;
  size: TSize;
};

const StatusPoint = ({ status, empty, size }: StatusPointProps) => {
  function getClassName(): string {
    const sizeClass = (size: TSize): string => {
      switch (size) {
        case 'xs':
          return 'w-2 h-2';
        case 'sm':
          return 'w-3 h-3';
        case 'md':
          return 'w-4 h-4';
        case 'lg':
          return 'w-5 h-5';
        case 'xl':
          return 'w-6 h-6';
      }
    };

    const colorClass = (status: TStatus): string => {
      let color = '';

      switch (status) {
        case 'progress':
          color = 'blue-500';
          break;
        case 'done':
          color = 'green-500';
          break;
        case 'disabled':
          color = 'gray-300';
          break;
        case 'processing':
          color = 'yellow-500';
          break;
        case 'error':
          color = 'red-500';
          break;
      }

      if (empty) {
        return `border-2 border-${color}`;
      }
      return `bg-${color}`;
    };

    return `rounded-full ${sizeClass(size)} ${colorClass(status)}`;
  }

  return <div className={getClassName()}></div>;
};

export default StatusPoint;
