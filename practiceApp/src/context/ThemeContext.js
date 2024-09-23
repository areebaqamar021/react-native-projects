import React, { createContext, useState, useContext } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(Appearance.getColorScheme() === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  const theme = {
    backgroundColor: isDarkTheme ? '#333' : '#fff',
    color: isDarkTheme ? '#fff' : '#000',
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
