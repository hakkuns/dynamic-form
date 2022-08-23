import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v1 } from 'uuid';
import '../App.css';
import CreateInputForm from './elements/CreateInputForm';
import FormTypeDispatcher from './elements/FormTypeDispatcher';

type Question = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
};

const CreateForm = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [question, setQuestion] = useState('');
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [formType, setFormType] = useState('');

  //const [formData, setFormData] = useState({});
  const newQuestion: Question = {
    id: v1(),
    label: question,
    placeholder: `${question}を入力してください`,
    type: 'text',
    value: '',
  };
  const formData = {
    title: title,
    questions: questions,
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value as string);
  };

  const handleSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const data = {
      title: title,
      questions: questions,
    };
    //setFormData(data);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value as string);
  };

  const handleAddQuestionButton = () => {
    setQuestions((prev) => [...prev, newQuestion]);
  };

  const handelQuestionOpenButton = () => {
    setIsQuestionOpen(true);
  };

  const renderSwitch = (type: string): JSX.Element | null => {
    switch (type) {
      case 'text':
        return (
          <CreateInputForm
            handleQuestionChange={handleQuestionChange}
            handleAddQuestionButton={handleAddQuestionButton}
          />
        );
      case 'checkbox':
        return <div>CheckBox</div>;
      case 'select':
        return <div>Select</div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav>
        <Link to="/show">Show Form</Link>
      </nav>
      <p>{JSON.stringify(formData)}</p>
      <div>
        <form>
          <ul>
            <li>
              <input
                type="text"
                placeholder="Title"
                onChange={handleTitleChange}
              />
            </li>
          </ul>
        </form>
      </div>

      <button type="button" onClick={handelQuestionOpenButton}>
        質問を追加する
      </button>
      {isQuestionOpen ? (
        <div>
          <FormTypeDispatcher setFormType={setFormType} />
        </div>
      ) : null}
      <div>{renderSwitch(formType)}</div>
      {/*<button type="button" onClick={handleSave}>
        Save
          </button>
    */}
    </div>
  );
};

export default CreateForm;
