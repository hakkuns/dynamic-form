import './App.css';
import Element from './components/Element';
import useElement from './hooks/useElement';

const App = () => {
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

export default App;
