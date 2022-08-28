import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <p>
          <Link to="show">Show Form</Link> |<Link to="create">Create Form</Link>
        </p>
        <p>
          <Link to="showgrid">AgGrid Table</Link> |
          <Link to="creategrid">Create AgGrid Table</Link>
        </p>
      </nav>
    </div>
  );
};

export default App;
