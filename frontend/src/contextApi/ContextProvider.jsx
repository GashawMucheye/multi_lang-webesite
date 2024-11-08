import { createContext, useState } from 'react';

export const ThemeChange = createContext();

export const ContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const changeColor = () => {
    setIsDark(!isDark);
  };
  const value = { isDark, changeColor };
  return <ThemeChange.Provider value={value}>{children}</ThemeChange.Provider>;
};
