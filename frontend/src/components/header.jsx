import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import ThemeToggle from './themeButton';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} >
            <PetsIcon />
        </Box>
        <ThemeToggle />
        <Button >Войти</Button>
        <Button color="inherit">Кнопка 2</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
