import React from 'react';

type Props = {
  handleQuestionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddQuestionButton: () => void;
};

const CreateInputForm = ({
  handleQuestionChange,
  handleAddQuestionButton,
}: Props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleQuestionChange(event);
  };

  const onClick = () => {
    handleAddQuestionButton();
  };

  return (
    <div>
      <form>
        <ul>
          <li>
            <input type="text" placeholder="質問" onChange={onChange} />
          </li>
        </ul>
        <button type="button" onClick={onClick}>
          追加
        </button>
      </form>
    </div>
  );
};

export default CreateInputForm;
