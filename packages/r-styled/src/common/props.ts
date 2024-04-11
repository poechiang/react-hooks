export enum PresetSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
export const ViewRadiusMap: Record<PresetSize, string> = {
  [PresetSize.SMALL]: '2px',
  [PresetSize.MEDIUM]: '4px',
  [PresetSize.LARGE]: '6px',
};
export const radiusProps = (props: { radius?: Size | number | string }) => {
  {
    const radius = ViewRadiusMap[props?.radius as PresetSize] ?? props?.radius;

    if (!radius) {
      return 0;
    }
    return typeof radius === 'number' ? `${radius}px` : radius;
  }
};

export const textAlignProps = (props: RSLayoutProps) => {
  return props.mainAlign || 'unset';
};
export const verticalAlignProps = (props: RSLayoutProps) => {
  return props.crossAlign === 'center' ? 'middle' : props.crossAlign;
};

export const borderProps = (props: RSLayoutProps) => {
  if (!props?.border) return 'none';
  const { width = 1, style = 'solid', color = props.color } = props.border;
  const w = typeof width === 'number' ? `${width}px` : width;
  return `${w} ${style} ${color ?? 'transparent'}`;
};
