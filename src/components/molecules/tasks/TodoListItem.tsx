'use client';

import React from 'react';
import Checkbox from '@/components/atoms/tasks/Checkbox';

type TodoListItemProps = {
  id: number;
  checked: boolean;
  content: string;
  important?: boolean;
  setChecked: () => void;
};

const TodoListItem = ({
  id,
  checked,
  setChecked,
  content,
  important,
}: TodoListItemProps) => {
  return (
    <div
      onClick={() => {
        setChecked();
      }}
      className={'flex gap-4 p-2 items-center border-t-2'}
    >
      <Checkbox id={content} checked={checked} />
      <span>{content}</span>
    </div>
  );
};

export default TodoListItem;
