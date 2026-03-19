import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Batiments from './pages/Batiments';
import Locataires from './pages/Locataires';
import Paiements from './pages/Paiements';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="batiments" element={<Batiments />} />
          <Route path="locataires" element={<Locataires />} />
          <Route path="paiements" element={<Paiements />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
