import { TTask } from '@/types/task';

export const TASKS: TTask[] = [
  {
    id: 1,
    title: 'Task 1',
    status: 'progress',
    content: 'This is a task.',
    createdAt: '2021-01-01 00:00:00',
    updatedAt: '2021-01-01 00:00:00',
  },
  {
    id: 2,
    title: 'Task 2',
    status: 'done',
    head: 'head message',
    tail: 'tail message',
    emphasize: true,
    content: 'This is a task.',
    createdAt: '2021-01-01 00:00:00',
    updatedAt: '2021-01-01 00:00:00',
  },
  {
    id: 3,
    title: 'Task 3',
    status: 'disabled',
    content: 'This is a task.',
    createdAt: '2021-01-01 00:00:00',
    updatedAt: '2021-01-01 00:00:00',
  },
  {
    id: 4,
    title: 'Task 4',
    status: 'processing',
    content: 'This is a task.',
    createdAt: '2021-01-01 00:00:00',
    updatedAt: '2021-01-01 00:00:00',
  },
  {
    id: 5,
    title: 'Task 5',
    status: 'error',
    content: 'This is a task.',
    createdAt: '2021-01-01 00:00:00',
    updatedAt: '2021-01-01 00:00:00',
  },
];
