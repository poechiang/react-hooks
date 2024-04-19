declare type ViewProps = RSContainerProps & {
  flex?: false | 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: boolean;
  gap?: PresetSize | number | string;
  height?: number | string;
  type?: 'ghost' | 'code' | 'block' | 'default';
  lang?: string;
  title?: string | React.ReactNode;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};
