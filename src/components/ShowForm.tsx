import { Link } from 'react-router-dom';
import '../App.css';
import useElement from '../hooks/useElement';
import Element from './Element';

const ShowForm = () => {
  const { elements, handleChange } = useElement();
  const { questions, title } = elements ?? {};

  const submitHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(elements);
  };

  return (
    <div className="App">
      <Link to="/create">Create Form</Link>
      <h3>{title}</h3>
      <form>
        <ul>
          {questions
            ? questions.map((question: any, id) => (
                <li key={id}>
                  <Element question={question} handleChange={handleChange} />
                </li>
              ))
            : null}
        </ul>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => submitHandler(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShowForm;
