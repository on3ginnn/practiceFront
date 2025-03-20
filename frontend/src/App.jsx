import Header from "./components/header";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainContent />} />
    {/* <Header /> */}
    </Routes>
    </BrowserRouter>
  );
};

export default App
