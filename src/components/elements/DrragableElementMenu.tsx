type Props = {
  index: number;
  deleteElement: (index: number) => void;
  setIsShowEditMenu: (fn: (prev: boolean) => boolean) => void;
};

const DrragableElementMenu = ({
  index,
  deleteElement,
  setIsShowEditMenu,
}: Props) => {
  const onClickDeleteHandler = () => {
    deleteElement(index);
  };
  const onClickEditHandler = () => {
    setIsShowEditMenu((prev) => !prev);
  };
  return (
    <div>
      <button type="button" onClick={onClickDeleteHandler}>
        削除
      </button>
      <button type="button" onClick={onClickEditHandler}>
        編集
      </button>
      <button type="button">変更</button>
    </div>
  );
};

export default DrragableElementMenu;
