import { useState } from 'react';
import DrragableElementMenu from './DrragableElementMenu';

type Props = {
  item: {
    title: string;
    value: string;
  };
  index: number;
  dragStart: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  dragEnter: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  dragEnd: () => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  deleteElement: (index: number) => void;
};

const DraggableElement = ({
  item,
  index,
  dragStart,
  dragEnter,
  dragEnd,
  handleChange,
  deleteElement,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isShowEditMenu, setIsShowEditMenu] = useState<boolean>(false);
  const onMousOverHandler = () => {
    setIsMenuOpen(true);
    console.log('mouse over');
  };
  const onMouseLeaveHandler = () => {
    setIsMenuOpen(false);
    setIsShowEditMenu(false);
    console.log('mouse leave');
  };

  return (
    <div
      style={{
        margin: '10px 25%',
        textAlign: 'center',
        border: '1px solid black',
        height: 'auto',
      }}
      key={index}
      onDragStart={(event) => dragStart(event, index)}
      onDragEnter={(event) => dragEnter(event, index)}
      onDragEnd={dragEnd}
      onMouseOver={onMousOverHandler}
      onMouseLeave={onMouseLeaveHandler}
      draggable
    >
      {isMenuOpen && (
        <DrragableElementMenu
          deleteElement={deleteElement}
          index={index}
          setIsShowEditMenu={setIsShowEditMenu}
        />
      )}
      {!isShowEditMenu ? (
        <div style={{ margin: '10px' }}>
          <label>{item.title}</label>
          <input
            type="text"
            id={index.toString()}
            placeholder=""
            //defaultValue={item.value}
            value={item.value}
            onChange={(event) => handleChange(event, index)}
          />
        </div>
      ) : (
        <div>
          <button>InputBox</button>
          <button>Checkbox</button>
          <button>Dropdown</button>
          <button>Textarea</button>
        </div>
      )}
    </div>
  );
};

export default DraggableElement;
