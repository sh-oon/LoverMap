'use client';
import React from 'react';
import Checkbox from '@/components/atoms/tasks/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  important = false,
}: TodoListItemProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    mounted && (
      <div
        onClick={() => {
          setChecked();
        }}
        className={'flex p-2 items-center border-t-2 justify-between'}
      >
        <div className={'flex gap-4'}>
          <Checkbox id={content} checked={checked} />
          <span>{content}</span>
        </div>
        {important && <FontAwesomeIcon icon={'flag'} color={'blue'} />}
      </div>
    )
  );
};

export default TodoListItem;
