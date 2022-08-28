import React from 'react';

type Props = {
  handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddFieldButton: () => void;
};

const CreateAgGridTableInputForm = ({
  handleFieldChange,
  handleAddFieldButton,
}: Props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange(event);
  };

  const onClick = () => {
    handleAddFieldButton();
  };

  return (
    <div>
      <form>
        <ul>
          <li>
            <input type="text" placeholder="フィールド" onChange={onChange} />
          </li>
        </ul>
        <button type="button" onClick={onClick}>
          追加
        </button>
      </form>
    </div>
  );
};

export default CreateAgGridTableInputForm;
