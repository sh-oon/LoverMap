'use client';

import { TASKS } from '@/constants/tasks';
import { useState } from 'react';
import { TTask } from '@/types/task';
import ListTable from '@/components/organisms/tasks/ListTable';

export default function Index() {
  const [tasks, setTasks] = useState<TTask[]>(TASKS);

  return (
    <>
      <div className={'flex-1 pt-8 px-4 grid grid-cols-2 gap-4'}>
        <ListTable
          tasks={tasks}
          setTasks={setTasks}
          className={'w-full'}
          title={'All Tasks'}
        />
      </div>
    </>
  );
}
