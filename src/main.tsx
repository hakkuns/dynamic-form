import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import CreateForm from './components/CreateForm';
import ShowForm from './components/ShowForm';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="show" element={<ShowForm />} />
        <Route path="create" element={<CreateForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
