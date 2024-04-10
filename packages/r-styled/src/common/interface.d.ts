declare type Align = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
declare type Size = 'small' | 'medium' | 'large';
declare type Sizable = Size | number | string;

declare interface RSProps {
  className?: string;
  style?: React.CSSProperties;
  classes?: Record<string, boolean>;
}

declare interface RSProviderProps extends RSProps {
  children?: React.ReactNode;
}

declare interface RSLayoutProps extends RSProps {
  className?: string;
  style?: React.CSSProperties;
  classes?: Record<string, boolean>;
  radius?: Size | number | string;
  border?:
    | false
    | {
        width?: string | number;
        style?: 'solid' | 'dotted' | 'dashed';
        color?: string;
      };
  color?: string;
  mainAlign?: Align;
  crossAlign?: Align;
  padding?: Sizable | Sizable[];
  paddingBlock?: Sizable | Sizable[];
  paddingInline?: Sizable | Sizable[];
  margin?: Sizable | Sizable[];
  marginBlock?: Sizable | Sizable[];
  marginInline?: Sizable | Sizable[];
}
declare interface RSContainerProps extends RSLayoutProps {
  children?: React.ReactNode;
}
