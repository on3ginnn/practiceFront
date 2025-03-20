import React from 'react';
import { IconButton } from '@mui/material';
import { useSetThemeMode, useSetTheme, useTheme, themeModeAtom } from './../themeStore';
import { useAtom } from 'jotai';
import { lightTheme, darkTheme } from './../themes';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { WbSunny } from '@mui/icons-material';

const ThemeToggle = () => {
  const [themeMode] = useAtom(themeModeAtom);
  const setThemeMode = useSetThemeMode();
  const setTheme = useSetTheme();

  const handleToggleTheme = () => {
    if (themeMode === 'light') {
      setTheme(darkTheme);
      setThemeMode('dark');
    } else {
      setTheme(lightTheme);
      setThemeMode('light');
    }
  };

  return (
    <IconButton onClick={handleToggleTheme}>
      {themeMode === 'light' ? <DarkModeIcon  sx={{ color: 'white' }} /> : <WbSunny />}
    </IconButton>
  );
};

export default ThemeToggle;
