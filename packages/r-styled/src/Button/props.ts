export const backgroundColorProps = (props: ButtonProps) => {
  if (props?.type == 'ghost') {
    return 'transparent';
  } else if (props?.type == 'danger') {
    return 'var(--rsc-color-error)';
  } else if (
    ['primary', 'info', 'warning', 'error'].includes(props?.type ?? '')
  ) {
    return `var(--rsc-color-${props?.type})`;
  } else {
    return 'var(--rsc-color-container)';
  }
};
export const colorProps = (props: ButtonProps) => {
  if (
    ['primary', 'info', 'warning', 'danger', 'error'].includes(
      props?.type ?? '',
    )
  ) {
    return '#ffffff';
  } else if (props?.type == 'link') {
    console.log(123123, props.type, props.theme);
    return props.theme.colorPrimary ?? 'var(--rsc-color-primary)';
  } else {
    return (
      props.theme.Button?.colorText ??
      props.theme.colorText ??
      'var(--rsc-color-text)'
    );
  }
};
