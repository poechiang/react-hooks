import { PresetSize } from '../common/enums';

export const DefaultThemePrefix = 'rsc';

export const DefaultCommonThemes: StyledThemeToken = {
  colorInfo: '#1677ff',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorSuccess: '#52c41a',
  colorLink: '#1677ff',
  borderStyle: 'solid',
  radiusMap: {
    [PresetSize.SMALL]: '2px',
    [PresetSize.MEDIUM]: '4px',
    [PresetSize.LARGE]: '6px',
  },
};
export const DefaultLightThemes: StyledThemeToken = {
  ...DefaultCommonThemes,
  colorPrimary: '#1677ff',
  colorLayout: '#f6f7f9',
  colorContainer: '#ffffff',
  colorText: '#000000',
  colorBorder: '#d9d9d9',
  colorSplit: '#f0f0f0',
};
export const DefaultDarkThemes: StyledThemeToken = {
  ...DefaultCommonThemes,
  colorPrimary: '#1677ff',
  colorLayout: '#000000',
  colorContainer: '#141414',
  colorText: '#ffffff',
  colorBorder: '#424242',
  colorSplit: '#303030',
};
