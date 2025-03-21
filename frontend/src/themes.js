import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6580f9',
      contrastText: 'white',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 1)',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6580f9',
      contrastText: 'white',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.87)',
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
