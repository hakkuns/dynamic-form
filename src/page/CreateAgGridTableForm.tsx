import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CreateAgGridTableInputForm from '../components/elements/CreateAgGridTableInputForm';

const CreateAgGridTableForm = () => {
  const [title, setTitle] = useState('');
  const [rowData, setRowData] = useState([{}]);
  const [fieldName, setFieldName] = useState('');
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);
  const [isFieldFormOpen, setIsFieldFormOpen] = useState(false);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      editable: true,
      sortable: true,
      filter: true,
    };
  }, []);

  const newField = {
    field: fieldName,
  };

  const formData = {
    title,
    defaultColDef,
    columnDefs: columnDefs,
    rowData,
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value as string);
  };

  const handelFieldFormOpenButton = () => {
    setIsFieldFormOpen(true);
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldName(event.target.value as string);
  };

  const handleAddFieldButton = () => {
    setColumnDefs((prev: any) => [...prev, newField]);
    setRowData((prev: any) => {
      const newRow = prev[0];
      newRow[fieldName] = '';
      return [newRow];
    });
  };

  const handelCompleteButton = () => {
    const repeat = (n: number, action: (i: number) => void) => {
      for (let i = 1; i < n; i++) {
        action(i);
      }
    };
    const row = rowData[0];
    const newRowData = [{ id: '0', ...row }];
    repeat(5, (i: number) => {
      newRowData.push({ id: i.toString(), ...row });
    });
    setRowData(newRowData);
  };

  return (
    <div className="App">
      <nav>
        <Link to="/showgrid">Show Grid Table</Link>
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

      <button type="button" onClick={handelFieldFormOpenButton}>
        フィールドを追加する
      </button>
      {isFieldFormOpen ? (
        <div>
          <CreateAgGridTableInputForm
            handleFieldChange={handleFieldChange}
            handleAddFieldButton={handleAddFieldButton}
          />
        </div>
      ) : null}

      <button type="button" onClick={handelCompleteButton}>
        完了
      </button>
    </div>
  );
};

export default CreateAgGridTableForm;
