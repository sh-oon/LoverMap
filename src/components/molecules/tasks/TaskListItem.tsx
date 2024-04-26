'use client';

import React from 'react';
import { TSize, TState } from '@/types/task';
import StatusPoint from '@/components/atoms/tasks/StatusPoint';
import Chip from '@/components/atoms/Chip';

type TaskListItemProps = {
  state: TState;
  empty: boolean;
  size: TSize;
  head?: string;
  content: string;
  tail?: string;
  emphasize?: boolean;
};

const TaskListItem = ({
  state,
  empty,
  size,
  head,
  content,
  tail,
  emphasize,
}: TaskListItemProps) => {
  return (
    <div
      className={'flex items-center justify-between p-2 h-[72px] border-t-2'}
    >
      <div className={'flex items-center'}>
        <StatusPoint state={state} empty={empty} size={size} />
        <div className={'ml-2'}>
          <div className={'flex flex-col font-bold'}>
            {head && <span className={'text-xs'}>{head}</span>}
            {emphasize ? (
              <span className={'text-red-500'}>{content}</span>
            ) : (
              content
            )}
            {tail && <span className={'text-xs text-gray-600'}>{tail}</span>}
          </div>
        </div>
      </div>
      <Chip
        label={'label'}
        state={state}
        onClick={() => {
          console.log('clicked');
        }}
      />
    </div>
  );
};

export default TaskListItem;
