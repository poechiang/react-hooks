import { PresetSize } from './enums';

export const ViewRadiusMap: Record<PresetSize, string> = {
  [PresetSize.SMALL]: '2px',
  [PresetSize.MEDIUM]: '4px',
  [PresetSize.LARGE]: '6px',
};
export const radiusProps = (props: {
  theme?: StyledThemeToken;
  radius?: Size | number | string;
}) => {
  {
    const { radius: value = 'medium', theme } = props;

    const radius =
      (theme?.Button?.radiusMap || theme?.radiusMap || ViewRadiusMap)[
        value as PresetSize
      ] ?? value;

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
  if (props?.border === false) return 'none';
  const theme = props.theme;
  const {
    width = theme?.borderRadius ?? 1,
    style = theme?.borderStyle || 'solid',
    color = theme?.colorBorder || props.color,
  } = props.border || {};
  const w = typeof width === 'number' ? `${width}px` : width;
  return `${w} ${style} ${color ?? 'transparent'}`;
};
