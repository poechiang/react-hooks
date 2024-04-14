declare type StyledComponentMap =
  | 'Button'
  | 'Text'
  | 'Input'
  | 'Select'
  | 'Link'
  | 'View';

declare type StyledComponentThemeProperties =
  | 'colorText'
  | 'colorContainer'
  | 'colorBorder'
  | 'colorSplit'
  | 'borderRadius'
  | 'borderWidth'
  | 'borderStyle'
  | 'fontSize';

declare type StyledThemeProperties =
  | 'colorPrimary'
  | 'colorLayout'
  | 'colorInfo'
  | 'colorWarning'
  | 'colorError'
  | 'colorSuccess'
  | 'colorLink'
  | StyledComponentThemeProperties;

type ThemeToken = Partial<Record<StyledThemeProperties, string>> & {
  radiusMap?: Record<Size, string | number>;
};
declare type StyledThemeToken = ThemeToken & {
  [x in StyledComponentMap]?: ThemeToken;
};

declare type ThemeKey = 'light' | 'dark';
declare type PresetColoringKey = 'default' | 'polar';
declare type ColoringKey = PresetColoringKey | string;

declare type StyledThemes = Record<
  ColoringKey,
  Record<ThemeKey, StyledThemeToken>
>;
declare interface RSThemeProviderProps extends RSProviderProps {
  theme?: ThemeKey;
  coloring?: ColoringKey;
  token?: Record<ThemeKey, StyledThemeToken>;
}
declare interface IThemeContext {
  token?: StyledThemeToken;
  register?: (
    coloring: ColoringKey,
    tokens: Record<ThemeKey, StyledThemeToken>,
  ) => void;
  use?: (coloring: ColoringKey, theme: ThemeKey) => void;
}
