import { ColDef, GetRowIdFunc, GetRowIdParams } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gridData from '../../data/gridData.json';

const ShowAgGridTable = () => {
  const gridRef = useRef<AgGridReact>(null);
  const containerStyle = useMemo(
    () => ({ width: '100%', height: '1200px' }),
    []
  );
  const gridStyle = useMemo(() => ({ height: '1200px', width: '100%' }), []);
  const [rowData, setRowData] = useState<any[]>(gridData.rowData);
  const [rowAndColumn, setRowAndColumn] = useState({ row: '', column: '' });
  const [cellStyles, setCellStyles] = useState<any[]>([]);

  const setCellStyle = (params: any) => {
    console.log(cellStyles);
    return cellStyles.find((cellStyle) => {
      return (
        cellStyle.row === params.data.id &&
        cellStyle.col === params.colDef.field
      );
    })?.style;
  };

  const [defaultColDef, setDefaultColDef] = useState<ColDef>({
    flex: 1,
    editable: true,
    sortable: true,
    filter: true,
    minWidth: 150,
    resizable: true,
    cellStyle: setCellStyle,
  });
  const [columnDefs, setColumnDefs] = useState<any[]>([
    {
      headerName: 'ヘッダー1',
      field: '項目1',
      pinned: 'left',
      width: 100,
      cellStyle: { color: 'white', backgroundColor: 'green' },
    },
    {
      headerName: 'ヘッダー2',
      field: '項目2',
      pinned: 'left',
      width: 100,
      cellStyle: { color: 'white', backgroundColor: 'red' },
    },
    {
      field: '項目3',
      width: 240,
    },
    { field: '項目4', width: 240 },
    { field: '項目5', width: 240 },
    { field: '項目6', width: 240 },
    { field: '項目7', width: 240 },
    { field: '項目8', width: 240 },
  ]);

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

  const handleCellClick = (event: any) => {
    setRowAndColumn({ row: event.data.id, column: event.colDef.field });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      colorName: { value: string };
      backgroundColor: { value: string };
      font: { value: string };
      fontSize: { value: string };
    };

    const newStyle = {
      color: target.colorName.value,
      backgroundColor: target.backgroundColor.value,
      font: target.font.value,
      fontSize: target.fontSize.value,
    };
    const newCellData = cellStyles.filter(
      (cellStyle) =>
        cellStyle.row !== rowAndColumn.row ||
        cellStyle.col !== rowAndColumn.column
    );
    newCellData.push({
      row: rowAndColumn.row,
      col: rowAndColumn.column,
      style: newStyle,
    });
    setCellStyles(newCellData);
  };

  return (
    <div style={containerStyle}>
      <div>
        <Link to="/creategrid">Create Ag Grid Form</Link>
        <h3>{gridData.title}</h3>
        <form onSubmit={handleSubmit}>
          <p>
            列:{rowAndColumn.column} 行:{rowAndColumn.row}
          </p>
          <label>背景色</label>
          <input type="text" name="backgroundColor" />
          <label>文字色</label>
          <input type="text" name="colorName" />
          <label>フォント</label>
          <input type="text" name="font" />
          <label>フォントサイズ</label>
          <input type="text" name="fontSize" />
          <button type="submit">設定</button>
          <button
            type="button"
            onClick={() =>
              setDefaultColDef({ ...defaultColDef, cellStyle: setCellStyle })
            }
          >
            反映
          </button>
        </form>

        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs as []}
            defaultColDef={defaultColDef}
            animateRows={true}
            getRowId={getRowId}
            onCellValueChanged={handleChange}
            onCellClicked={handleCellClick}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default ShowAgGridTable;
