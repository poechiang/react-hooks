import { useStorage } from 'r-hooks';
import { FC, useEffect, useState } from 'react';

import { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultDarkThemes, DefaultLightThemes } from './tokens';
const APP_THEME = 'appTheme';
const APP_COLORING = 'appColoring';

export const ThemeContext = createContext<IThemeContext>(null!);

export const useThemeScope = () => useContext(ThemeContext);

export const ThemeScopeProvider: FC<RSThemeProviderProps> = ({
  children,
  ...props
}) => {
  const { local } = useStorage();
  const [themeMapInst, setThemeMapInst] = useState<StyledThemes>(null!);
  const [currentTheme, setCurrentTheme] = useState<StyledThemeToken>(null!);
  const [themeKey, setThemeKey] = useState(props.theme || 'light');
  const [coloringKey, setColoringKey] = useState(props.coloring || 'polar');

  const use = (coloring: ColoringKey, theme: ThemeKey) => {
    let needUpdate = false;
    if (theme && theme !== themeKey) {
      setThemeKey(theme);
      local(APP_THEME, theme);
      needUpdate = true;
    }
    if (coloring && coloring !== coloringKey) {
      setColoringKey(coloring);
      local(APP_COLORING, coloring);
      needUpdate = true;
    }
    Promise.resolve().then(
      () =>
        needUpdate && updateThemeVariable(themeMapInst?.[coloring]?.[theme]),
    );
  };
  const register = async (
    coloring: ColoringKey,
    tokens: Record<ThemeKey, StyledThemeToken>,
  ) => {
    themeMapInst[coloring] = tokens;
    setThemeMapInst({ ...themeMapInst });
  };
  useEffect(() => {
    const isDark = checkDark();
    const colorings = themeMapInst[coloringKey] ?? {
      light: DefaultLightThemes,
      dark: DefaultDarkThemes,
    };
    const token = colorings[themeKey ?? (isDark ? 'dark' : 'light')];
    setCurrentTheme(token);
    updateThemeVariable(token);
  }, [themeMapInst, coloringKey, themeKey]);
  return (
    <ThemeContext.Provider value={{ currentTheme, use, register }}>
      <ThemeProvider
        theme={themeMapInst[coloringKey || 'polar'][themeKey || 'light']}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default void 0;
