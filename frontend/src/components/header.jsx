import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import ThemeToggle from './themeButton';
import { ProtectedRoute } from '../config/protectedRoute';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} >
            <PetsIcon />
        </Box>
        <ThemeToggle />
        <Button href='/'>Главная</Button>        
        <Button href='/profile'>Профиль</Button>
        <Button href='/login' >Вход</Button>
        <Button href='/register' >Регистрация</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
