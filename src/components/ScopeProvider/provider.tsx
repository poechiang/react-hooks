import { merge } from 'lodash';
import { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { checkDark } from '../common';
import { DefaultDarkThemes, DefaultLightThemes } from './tokens';
import { ThemeContext } from './useScope';

export const ScopeProvider: FC<RSThemeProviderProps> = ({
  children,
  ...props
}) => {
  const [themeMapInst, setThemeMapInst] = useState<StyledThemes>({
    default: {
      light: DefaultLightThemes,
      dark: DefaultDarkThemes,
    },
  });
  const [currentToken, setCurrentToken] = useState<StyledThemeToken>(null!);
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
    const theme = themeKey ?? (isDark ? 'dark' : 'light');

    const coloring = coloringKey ?? 'default';
    const colorings = themeMapInst[coloring] ?? {
      light: DefaultLightThemes,
      dark: DefaultDarkThemes,
    };
    const token = merge({}, colorings[theme as ThemeKey], props.token);

    setCurrentToken(token);
  }, [themeMapInst, coloringKey, themeKey, props.token]);
  return (
    <ThemeContext.Provider value={{ token: currentToken, use, register }}>
      <ThemeProvider theme={currentToken || {}}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default void 0;
