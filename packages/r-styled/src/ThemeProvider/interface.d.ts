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

declare type StyledThemeToken = Partial<
  Record<StyledThemeProperties, string>
> & {
  [x in StyledComponentMap]?: Partial<Record<StyledThemeProperties, string>>;
};

declare type ThemeKey = 'light' | 'dark';
declare type PresetColoringKey = 'polar';
declare type ColoringKey = PresetColoringKey | string;

declare type StyledThemes = Record<
  ColoringKey,
  Record<ThemeKey, StyledThemeToken>
>;
declare interface RSThemeProviderProps extends RSProviderProps {
  theme?: ThemeKey;
  coloring?: ColoringKey;
}
declare interface IThemeContext {
  currentTheme?: StyledThemeToken;
  register?: (
    coloring: ColoringKey,
    tokens: Record<ThemeKey, StyledThemeToken>,
  ) => void;
  use?: (coloring: ColoringKey, theme: ThemeKey) => void;
}
