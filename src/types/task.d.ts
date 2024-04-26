export type TState = 'progress' | 'done' | 'disabled' | 'processing' | 'error';
export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TTask = {
  id: number;
  title: string;
  state: TState;
  content: string;
  empty?: boolean;
  head?: string;
  tail?: string;
  emphasize?: boolean;
  createdAt: string;
  updatedAt?: string;
};

export type TTodoList = {
  id: number;
  checked: boolean;
  content: string;
  createdAt: string;
  updatedAt?: string;
  important?: boolean;
};

export type TSectionItem = {
  id: number;
  title: string;
  type: 'task' | 'todo';
  tasks: TTask[] | TTodoList[];
};
