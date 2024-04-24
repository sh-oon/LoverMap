import React from 'react';
import { TSize, TStatus } from '@/types/task';
import StatusPoint from '@/components/atoms/tasks/StatusPoint';

type TaskListItemProps = {
  status: TStatus;
  empty: boolean;
  size: TSize;
  head?: string;
  content: string;
  tail?: string;
  emphasize?: boolean;
};

const TaskListItem = ({
  status,
  empty,
  size,
  head,
  content,
  tail,
  emphasize,
}: TaskListItemProps) => {
  return (
    <div className={'flex items-center'}>
      <StatusPoint status={status} empty={empty} size={size} />
      <div className={'ml-2'}>
        <div className={'font-bold'}>
          {head}
          {emphasize ? (
            <span className={'text-red-500'}>{content}</span>
          ) : (
            content
          )}
          {tail}
        </div>
      </div>
    </div>
  );
};

export default TaskListItem;
