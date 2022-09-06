import { useRef } from 'react';
import DraggableElement from '../components/elements/DraggableElement';
import useData, { IData } from '../hooks/useData';
type Props = {};

const DraggableList = ({}: Props) => {
  // Having 0 as the initial value might be a bad idea
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);
  const { listData, setListData } = useData();

  const dragStart = (
    event: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    dragItem.current = position;
    //console.log(event.target);
  };

  const dragEnter = (
    event: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    dragOverItem.current = position;
    //console.log(event.target);
  };

  const dragEnd = () => {
    const newListItems: IData = [...listData];
    const dragItemContent = newListItems[dragItem.current];
    newListItems.splice(dragItem.current, 1);
    newListItems.splice(dragOverItem.current, 0, dragItemContent);

    // reinitialize the dragItem and dragOverItem
    // to set 0 might be a bad idea
    dragItem.current = 0;
    dragOverItem.current = 0;
    setListData(newListItems);
    //console.log(newListItems);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const { value } = event.target;
    setListData((prev) => {
      const newList = [...prev];
      newList[id].value = value;
      return newList;
    });
  };

  const deleteElement = (index: number) => {
    setListData((prev) => {
      const newList = [...prev];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <div>
      <h1>Draggable List</h1>
      <p>{JSON.stringify(listData)}</p>
      <div>
        {listData &&
          listData.map((item, index) => (
            <DraggableElement
              key={index}
              item={item}
              index={index}
              dragStart={dragStart}
              dragEnter={dragEnter}
              dragEnd={dragEnd}
              handleChange={handleChange}
              deleteElement={deleteElement}
            />
          ))}
      </div>
    </div>
  );
};

export default DraggableList;
