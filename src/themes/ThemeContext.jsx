import  { createContext, useContext } from 'react';

import { defaultTheme, darkTheme } from './themes';

const themes = { defaultTheme, darkTheme };

const ThemeContext = createContext(themes);

const useTheme = () => useContext(ThemeContext);

export { useTheme };
