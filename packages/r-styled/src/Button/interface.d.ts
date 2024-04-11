declare type ButtonProps = RSContainerProps & {
  theme: StyledThemeToken;
  type?:
    | 'ghost'
    | 'primary'
    | 'warning'
    | 'danger'
    | 'error'
    | 'success'
    | 'info'
    | 'link';
  /**
   * How large should the button be?
   */
  size?: Size;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};
