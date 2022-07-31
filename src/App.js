import React from 'react';
import './App.css';
import { Route, Routes } from "react-router";
import Dashboard from './Pages/Dashboard/Dashboard'
import NotFound from './Pages/NotFound/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:id" element={<NotFound/>} />
    </Routes>
  )
}

export default App