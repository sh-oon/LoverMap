import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  outline?: boolean;
  color?: 'blue' | 'green' | 'gray' | 'yellow' | 'red';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};
const Button = ({
  label,
  onClick,
  size = 'md',
  outline = false,
  color = 'blue',
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const getClassName = (): string => {
    const sizeClass = (size: ButtonProps['size']): string => {
      switch (size) {
        case 'sm':
          return 'p-1 text-xs';
        case 'md':
          return 'p-2 text-sm';
        case 'lg':
          return 'p-3 text-base';
        case 'xl':
          return 'p-4 text-lg';
        case 'full':
          return 'p-2 text-sm w-full';
      }

      return 'p-2 text-sm';
    };

    const colorClass = (color: ButtonProps['color']): string => {
      let colorClass = '';

      switch (color) {
        case 'blue':
          colorClass = 'bg-blue-500 text-white';
          break;
        case 'green':
          colorClass = 'bg-green-500 text-white';
          break;
        case 'gray':
          colorClass = 'bg-gray-300 text-black';
          break;
        case 'yellow':
          colorClass = 'bg-yellow-500 text-black';
          break;
        case 'red':
          colorClass = 'bg-red-500 text-white';
          break;
      }

      if (outline) {
        return `border-2 border-${color}-500 text-${color}-500`;
      }

      return colorClass;
    };

    return `rounded-lg ${sizeClass(size)} ${colorClass(color)} transition-all`;
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${getClassName()} whitespace-nowrap`}
    >
      {label}
    </button>
  );
};

export default Button;
