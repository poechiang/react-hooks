import { checkDark } from '../common/checkDark';
import {
  DefaultDarkThemes,
  DefaultLightThemes,
  DefaultThemePrefix,
} from './tokens';

export const toHyphen = (name: string) =>
  name.replace(/[A-Z]/g, (x) => `-${x.toLocaleLowerCase()}`);
/**
 * init css variable ...
 */
export const updateThemeVariable = (token?: StyledThemeToken) => {
  token = token || (checkDark() ? DefaultDarkThemes : DefaultLightThemes);

  Object.entries(token).forEach(([key, value]) => {
    if (typeof value === 'string') {
      document.documentElement.style.setProperty(
        toHyphen(`--${DefaultThemePrefix}-${key}`),
        value,
      );
    } else {
      Object.entries(value).forEach(([k, v]) => {
        document.documentElement.style.setProperty(
          toHyphen(`--${DefaultThemePrefix}-${key}-${k}`),
          v,
        );
      });
    }
  });
};

export const getToken = (key: StyledThemeProperties, value: string) => {
  return value ?? DefaultLightThemes[key];
};
