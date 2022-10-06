import { useState } from 'react';

export type IData = {
  title: string;
  value: string;
}[];

const items: IData = [
  {
    title: 'Input 1',
    value: 'Value 1',
  },
  {
    title: 'Input 2',
    value: 'Value 2',
  },
  {
    title: 'Input 3',
    value: 'Value 3',
  },
  {
    title: 'Input 4',
    value: 'Value 4',
  },
  {
    title: 'Input 5',
    value: 'Value 5',
  },
];

const useData = () => {
  const [listData, setListData] = useState<IData>(items);

  return { listData, setListData };
};

export default useData;
