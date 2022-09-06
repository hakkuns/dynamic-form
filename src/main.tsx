import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import CreateAgGridTableForm from './page/CreateAgGridTableForm';
import CreateForm from './page/CreateForm';
import DraggableList from './page/DraggableList';
import ShowAgGridTable from './page/ShowAgGridTable';
import ShowForm from './page/ShowForm';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="show" element={<ShowForm />} />
        <Route path="create" element={<CreateForm />} />
        <Route path="showgrid" element={<ShowAgGridTable />} />
        <Route path="creategrid" element={<CreateAgGridTableForm />} />
        <Route path="draggablelist" element={<DraggableList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
