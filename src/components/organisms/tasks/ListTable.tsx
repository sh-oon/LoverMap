'use client';

import React, { useState } from 'react';
import { TTask, TTodoList } from '@/types/task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateIconDefinition } from '@/utils/generateIcon';
import TaskListItem from '@/components/molecules/tasks/TaskListItem';

type ListTableProps = {
  tasks: TTask[] | TTodoList[];
  title?: string;
  className?: string;
  itemType: 'task' | 'todo';
};

const ListTable = ({ tasks, title, itemType, ...props }: ListTableProps) => {
  const [taskList, setTaskList] = useState<TTask[] | TTodoList[]>(tasks);

  function isTask(item: TTask | TTodoList): item is TTask {
    return 'status' in item;
  }

  function isTodoList(item: TTask | TTodoList): item is TTodoList {
    return 'todo-list-specific-property' in item;
  }

  return (
    <section className={'inline-block w-full break-inside-avoid'}>
      <div
        className={
          "'flex flex-col border-t-4 border-blue-300 rounded-t-md max-h-[50dvh] flex-grow-0 overflow-auto bg-white shadow-md'"
        }
      >
        <div
          className={
            'flex p-2 justify-between items-center sticky top-0 z-10 bg-white'
          }
        >
          <h1 className={'inline-block font-bold text-xl'}>{title}</h1>
          <button>
            <FontAwesomeIcon
              className={'rounded-lg p-2'}
              size={'lg'}
              color={'gray'}
              icon={generateIconDefinition('plus')}
            />
          </button>
        </div>

        <div>
          {taskList.map((task: TTask | TTodoList, index) => (
            <React.Fragment key={index}>
              {isTask(task) && (
                <TaskListItem
                  key={index}
                  status={task.status}
                  empty={false}
                  size={'md'}
                  head={task.head}
                  content={task.content}
                  tail={task.tail}
                  emphasize={task.emphasize}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListTable;
