import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from './themeStore';

const ThemeProviderWrapper = ({ children }) => {
  const [theme] = useTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
