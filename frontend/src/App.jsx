import Header from "./components/header";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from "@mui/material";
import { LoginForm } from "./components/login";
import { RegisterForm } from "./components/register";
import { HomePage } from "./components/home";
import { ProtectedRoute } from './config/protectedRoute';

const App = () => {
  return (
    <Box>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          
          <Route path='/profile' element={<ProtectedRoute><LoginForm /></ProtectedRoute>} />
          
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App
