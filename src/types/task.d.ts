export type TStatus = 'progress' | 'done' | 'disabled' | 'processing' | 'error';
export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TTask = {
  id: number;
  title: string;
  status: TStatus;
  content: string;
  head?: string;
  tail?: string;
  emphasize?: boolean;
  createdAt: string;
  updatedAt: string;
};
