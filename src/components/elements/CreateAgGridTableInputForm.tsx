import React from 'react';

type Props = {
  text: string;
  handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddFieldButton: () => void;
};

const CreateAgGridTableInputForm = ({
  text,
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
        <p>{text}</p>
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
