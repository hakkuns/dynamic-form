import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="show">Show Form</Link> | <Link to="create">Create Form</Link>
      </nav>
    </div>
  );
};

export default App;
