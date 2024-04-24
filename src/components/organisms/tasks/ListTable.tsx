import React, { Dispatch } from 'react';
import { TTask } from '@/types/task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateIconDefinition } from '@/utils/generateIcon';

type ListTableProps = {
  tasks: TTask[];
  setTasks: Dispatch<TTask[]>;
  title?: string;
  className?: string;
};

const ListTable = ({ tasks, setTasks, title, ...props }: ListTableProps) => {
  return (
    <section
      className={
        'flex flex-col border-t-4 border-blue-300 rounded-t-md max-h-60 bg-white shadow-md'
      }
    >
      <div className={'flex p-2 justify-between items-center'}>
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
    </section>
  );
};

export default ListTable;
