export type StyledComponentMap =
  | 'Button'
  | 'Text'
  | 'Input'
  | 'Select'
  | 'Link'
  | 'View';

export type StyledComponentThemeProperties =
  | 'colorText'
  | 'colorContainer'
  | 'colorBorder'
  | 'colorSplit'
  | 'borderRadius'
  | 'borderWidth'
  | 'fontSize';
export type StyledThemeProperties =
  | 'colorPrimary'
  | 'colorLayout'
  | 'colorInfo'
  | 'colorWarning'
  | 'colorError'
  | 'colorSuccess'
  | 'colorLink'
  | StyledComponentThemeProperties;

export type StyledTheme = Partial<Record<StyledThemeProperties, string>>;
export type StyledThemes = StyledTheme & {
  [x in StyledComponentMap]?: StyledTheme;
};

export type ThemeType = 'light' | 'dark';
export type PresetColoring = 'polar';

export const DefaultThemePrefix = 'rsc';
export const DefaultLightThemes: StyledThemes = {
  colorPrimary: '#1677ff',
  colorLayout: '#f6f7f9',
  colorContainer: '#ffffff',
  colorText: '#000000',
  colorBorder: '#d9d9d9',
  colorSplit: '#f0f0f0',
  colorInfo: '#1677ff',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorSuccess: '#52c41a',
  colorLink: '#1677ff',
};
export const DefaultDarkThemes: StyledThemes = {
  colorPrimary: '#1677ff',
  colorLayout: '#000000',
  colorContainer: '#141414',
  colorText: '#ffffff',
  colorBorder: '#424242',
  colorSplit: '#303030',
  colorInfo: '#1677ff',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorSuccess: '#52c41a',
  colorLink: '#1677ff',
};

const toHyphen = (name: string) =>
  name.replace(/[A-Z]/g, (x) => `-${x.toLocaleLowerCase()}`);
const checkDark = () =>
  window.window.matchMedia('(prefers-color-scheme: dark)').matches;
// init css variable ...
const initTheme = checkDark() ? DefaultDarkThemes : DefaultLightThemes;
Object.entries(initTheme).forEach(([key, value]) => {
  if (typeof value === 'string') {
    document.documentElement.style.setProperty(
      toHyphen(`--${DefaultThemePrefix}-${key}`),
      value,
    );
  } else {
    Object.entries(value).forEach(([k, v]) => {
      document.documentElement.style.setProperty(
        toHyphen(`--${DefaultThemePrefix}${k}-${key}`),
        v,
      );
    });
  }
});
