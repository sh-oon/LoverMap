import { ASSIGN_TASKS, TASKS } from '@/constants/tasks';
import ListTable from '@/components/organisms/tasks/ListTable';
import { TSectionItem } from '@/types/task';
import React from 'react';

export default function Index() {
  const sections: TSectionItem[] = [
    {
      id: 1,
      title: 'All tasks',
      type: 'task',
      tasks: TASKS,
    },
    {
      id: 2,
      title: 'To do list',
      type: 'task',
      tasks: ASSIGN_TASKS,
    },
  ];

  return (
    <>
      <div className={'flex-1 pt-8 px-4 grid grid-cols-2 gap-4'}>
        {sections.map((section: TSectionItem) => (
          <ListTable
            key={section.id}
            title={section.title}
            tasks={section.tasks}
            itemType={section.type}
          />
        ))}
      </div>
    </>
  );
}
