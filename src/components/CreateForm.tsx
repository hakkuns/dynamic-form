import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

type Input = {
  title: string;
  questions: [];
};

const CreateForm = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<any>([]);
  const [question, setQuestion] = useState('');
  //const [formData, setFormData] = useState({});
  const newQuestion = {
    id: 'name',
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
    setQuestions((prev: any) => [...prev, newQuestion]);
  };

  return (
    <div className="App">
      <nav>
        <Link to="/show">Show Form</Link>
      </nav>
      <p>{JSON.stringify(formData)}</p>
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
      <form>
        <ul>
          <li>
            <input
              type="text"
              placeholder="質問"
              onChange={handleQuestionChange}
            />
          </li>
        </ul>
      </form>

      <button type="button" onClick={handleAddQuestionButton}>
        Add
      </button>
      {/*<button type="button" onClick={handleSave}>
        Save
          </button>
    */}
    </div>
  );
};

export default CreateForm;
