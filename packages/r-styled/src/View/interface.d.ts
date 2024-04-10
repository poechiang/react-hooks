declare type ViewProps = RSContainerProps & {
  flex?: false | 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: boolean;
  gap?: PresetSize | number | string;
  height?: number | string;
};
