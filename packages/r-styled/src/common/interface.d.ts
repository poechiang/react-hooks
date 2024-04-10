declare type Align = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
declare type Size = 'small' | 'medium' | 'large';
declare type Sizable = Size | number | string;
declare type RSProps = {
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
};
declare type RSContainerProps = RSProps & {
  children?: React.ReactNode;
};
