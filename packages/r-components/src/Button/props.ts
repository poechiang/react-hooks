import Color from 'color';
import { borderProps as commonBorderProps } from '../common/props';
export const backgroundColorProps = (props: StyledButtonProps) => {
  if (['text', 'ghost', 'link'].includes(props?.styledType || '')) {
    return 'transparent';
  } else if (props?.styledType == 'danger') {
    return props.theme?.Button?.colorError ?? props.theme?.colorError;
  } else if (
    ['primary', 'info', 'warning', 'error'].includes(props?.styledType ?? '')
  ) {
    return props.theme?.Button?.colorPrimary ?? props.theme?.colorPrimary;
  } else {
    return props.theme?.Button?.colorContainer ?? props.theme?.colorContainer;
  }
};
export const backgroundColorHoverProps = (props: StyledButtonProps) => {
  const bgColor = backgroundColorProps(props);
  if (props.styledType === 'link') {
    return bgColor;
  } else {
    try {
      return Color(bgColor).darken(0.1).hex();
    } catch (e) {
      return bgColor;
    }
  }
};
export const colorProps = (props: StyledButtonProps) => {
  if (
    ['primary', 'info', 'warning', 'danger', 'error'].includes(
      props?.styledType ?? '',
    )
  ) {
    return props.color ?? '#ffffff';
  } else if (props?.styledType == 'link') {
    return (
      props.color ??
      props.theme?.Button?.colorPrimary ??
      props.theme?.colorPrimary
    );
  } else {
    return (
      props.color ?? props.theme?.Button?.colorText ?? props.theme?.colorText
    );
  }
};

export const borderProps = (props: StyledButtonProps) => {
  if (
    ['primary', 'danger', '', 'link', 'text'].includes(props?.styledType ?? '')
  ) {
    return commonBorderProps({ ...props, border: false });
  }
  return commonBorderProps(props);
};
export const heightProps = (props: StyledButtonProps) => {
  if (props.size === 'large') {
    return '40px';
  } else if (props.size === 'small') {
    return '24px';
  } else {
    return '32px';
  }
};
