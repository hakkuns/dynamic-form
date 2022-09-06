import { ColDef, GetRowIdFunc, GetRowIdParams } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gridData from '../../data/gridData.json';

const ShowAgGridTable = () => {
  const gridRef = useRef<AgGridReact>(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState<any[]>(gridData.rowData);
  const [columnDefs, setColumnDefs] = useState<any[]>(gridData.columnDefs);
  console.log(columnDefs);
  const defaultColDef = useMemo<ColDef>(() => {
    return gridData.defaultColDef;
  }, []);
  const getRowId = useMemo<GetRowIdFunc>(() => {
    return (params: GetRowIdParams) => {
      return params.data.id;
    };
  }, []);

  const handleChange = (event: any) => {
    const id = event.data.id;
    const newRow = rowData.find((row) => row.id === id);
    const newRowData = rowData.filter((row) => row.id !== id);
    newRowData.push(newRow);
    newRowData.sort((a, b) => a.id - b.id);
    setRowData(newRowData);
  };

  return (
    <div style={containerStyle}>
      <div className="example-wrapper">
        <Link to="/creategrid">Create Ag Grid Form</Link>
        <h3>{gridData.title}</h3>
        {JSON.stringify(rowData)}

        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            animateRows={true}
            getRowId={getRowId}
            onCellValueChanged={handleChange}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default ShowAgGridTable;
