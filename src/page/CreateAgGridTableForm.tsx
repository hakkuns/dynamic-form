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
  const [isRowFormOpen, setIsRowFormOpen] = useState(false);

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

  const handelRowFormOpenButton = () => {
    setIsRowFormOpen(true);
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldName(event.target.value as string);
  };

  const handleAddFieldButton = () => {
    setColumnDefs((prev: any) => [...prev, newField]);
  };

  const handelAddRowButton = () => {
    const row = rowData[0];
    const newRowData = [{ ...row }];
    newRowData.push({ ...row });

    setRowData(newRowData);
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
      <div>
        <CreateAgGridTableInputForm
          text="列を追加する"
          handleFieldChange={handleFieldChange}
          handleAddFieldButton={handleAddFieldButton}
        />
      </div>
      <div>
        <p>行を追加する</p>
        <button onClick={handelAddRowButton}>行を追加する</button>
      </div>

      <button type="button" onClick={handelCompleteButton}>
        完了
      </button>
    </div>
  );
};

export default CreateAgGridTableForm;
