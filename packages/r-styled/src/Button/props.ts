export const backgroundColorProps = (props: ButtonProps) => {
  if (props?.theme == 'ghost') {
    return 'transparent';
  } else if (props?.theme == 'danger') {
    return 'var(--rsc-color-error)';
  } else if (
    ['primary', 'info', 'warning', 'error'].includes(props?.theme ?? '')
  ) {
    return `var(--rsc-color-${props?.theme})`;
  } else {
    return 'var(--rsc-color-container)';
  }
};
export const colorProps = (props: ButtonProps) => {
  if (
    ['primary', 'info', 'warning', 'danger', 'error'].includes(
      props?.theme ?? '',
    )
  ) {
    return '#ffffff';
  } else if (props?.theme == 'link') {
    return 'var(--rsc-color-primary)';
  } else {
    return 'var(--rsc-color-text)';
  }
};
