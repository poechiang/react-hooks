import { createContext, useContext } from 'react';

export const ThemeContext = createContext<IThemeContext>(null!);

export const useScope = () => useContext(ThemeContext);
