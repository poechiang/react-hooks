export const colorProps = (props: TextProps) => {
  return props.color ?? props.theme?.Text?.colorText ?? props.theme?.colorText;
};
export const fontSizeProps = (props: TextProps) => {
  const fontsize =
    props.fontSize ??
    props.theme?.Text?.fontSize ??
    props.theme?.fontSize ??
    null;
  return typeof fontsize === 'number' ? `${fontsize}px` : fontsize;
};

export const textAlignProps = (props: TextProps) => {
  if (props.role === 'title') {
    return props.mainAlign || null;
  } else {
    return null;
  }
};
