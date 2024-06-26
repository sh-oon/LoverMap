'use client';

import React, { useState } from 'react';
import { TTask, TTodoList } from '@/types/task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateIconDefinition } from '@/utils/generateIcon';
import TaskListItem from '@/components/molecules/tasks/TaskListItem';
import TodoListItem from '@/components/molecules/tasks/TodoListItem';

type ListTableProps = {
  tasks: TTask[] | TTodoList[];
  title?: string;
  className?: string;
  itemType: 'task' | 'todo';
};

const ListTable = ({ tasks, title, itemType, ...props }: ListTableProps) => {
  const [itemList, setItemList] = useState<(TTask | TTodoList)[]>(
    sortedItems(tasks),
  );

  function isTask(item: TTask | TTodoList): item is TTask {
    return 'state' in item;
  }

  function isTodoList(item: TTask | TTodoList): item is TTodoList {
    return 'checked' in item;
  }

  function sortedItems(array: (TTask | TTodoList)[]): (TTask | TTodoList)[] {
    return array.sort((a, b) => {
      if (isTodoList(a) && isTodoList(b)) {
        // checked 비교
        if (a.checked && !b.checked) {
          return 1;
        }
        if (!a.checked && b.checked) {
          return -1;
        }
      }
      // createdAt 비교
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      // updatedAt 비교
      if (a?.updatedAt && b?.updatedAt) {
        if (a.updatedAt > b.updatedAt) {
          return -1;
        }
        if (a.updatedAt < b.updatedAt) {
          return 1;
        }
      }
      return 0;
    });
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
          {itemList.map((item: TTask | TTodoList, index) => (
            <React.Fragment key={index}>
              {isTask(item) && (
                <TaskListItem
                  key={index}
                  state={item.state}
                  empty={false}
                  size={'md'}
                  head={item.head}
                  content={item.content}
                  tail={item.tail}
                  emphasize={item.emphasize}
                />
              )}
              {isTodoList(item) && (
                <TodoListItem
                  key={index}
                  id={item.id}
                  checked={item.checked}
                  content={item.content}
                  important={item.important}
                  setChecked={() => {
                    if (isTodoList(item)) {
                      const newItems = itemList.map((i) => {
                        if (i.id === item.id && isTodoList(i)) {
                          return { ...i, checked: !i.checked };
                        }
                        return i;
                      });

                      setItemList(sortedItems(newItems));
                    }
                  }}
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
