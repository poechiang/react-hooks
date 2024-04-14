type ButtonStyledType =
  | 'default'
  | 'ghost'
  | 'primary'
  | 'warning'
  | 'danger'
  | 'error'
  | 'success'
  | 'info'
  | 'link';
declare type StyledButtonProps = RSContainerProps & {
  theme?: StyledThemeToken;
  styledType?: ButtonStyledType;
  /**
   * How large should the button be?
   */
  size?: Size;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};
declare type ButtonProps = Omit<StyledButtonProps, 'themeType'> & {
  type?: ButtonStyledType;
  htmlType?: 'button' | 'submit' | 'reset';
  /**
   * How large should the button be?
   */
  size?: Size;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};
