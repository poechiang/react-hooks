import { useStorage } from 'r-hooks';
import { FC, useEffect, useState } from 'react';

import { merge } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { DefaultDarkThemes, DefaultLightThemes } from './tokens';
import { ThemeContext } from './useScope';
import { checkDark, updateThemeVariable } from './utils';
const APP_THEME = 'rscTheme';
const APP_COLORING = 'rscColoring';
export const ScopeProvider: FC<RSThemeProviderProps> = ({
  children,
  ...props
}) => {
  const { local } = useStorage();
  const [themeMapInst, setThemeMapInst] = useState<StyledThemes>({
    default: {
      light: DefaultLightThemes,
      dark: DefaultDarkThemes,
    },
  });
  const [currentTheme, setCurrentTheme] = useState<StyledThemeToken>(null!);
  const [themeKey, setThemeKey] = useState(props.theme);
  const [coloringKey, setColoringKey] = useState(props.coloring);

  const use = (coloring: ColoringKey, theme: ThemeKey) => {
    if (theme && theme !== themeKey) {
      setThemeKey(theme);
    }
    if (coloring && coloring !== coloringKey) {
      setColoringKey(coloring);
    }
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
    const theme = themeKey ?? local(APP_THEME) ?? (isDark ? 'dark' : 'light');

    const coloring = coloringKey ?? local(APP_COLORING) ?? 'default';
    const colorings = themeMapInst[coloring] ?? {
      light: DefaultLightThemes,
      dark: DefaultDarkThemes,
    };
    const token = merge({}, colorings[theme as ThemeKey], props.token);
    setCurrentTheme(token);
    updateThemeVariable(token);

    local(APP_COLORING, coloringKey);
    local(APP_THEME, themeKey);
  }, [themeMapInst, coloringKey, themeKey, local, props.token]);
  return (
    <ThemeContext.Provider value={{ currentTheme, use, register }}>
      <ThemeProvider theme={currentTheme || {}}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default void 0;
