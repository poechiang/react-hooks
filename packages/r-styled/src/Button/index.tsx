import { useClassName } from 'r-hooks';
import { FC } from 'react';
import styled from 'styled-components';
import { DefaultDarkThemes, DefaultLightThemes } from '../ScopeProvider/tokens';
import { checkDark } from '../common';
import { radiusProps } from '../common/props';
import {
  backgroundColorHoverProps,
  backgroundColorProps,
  borderProps,
  colorProps,
  heightProps,
} from './props';

const StyledButton = styled.button<StyledButtonProps>`
  border: ${borderProps};
  border-radius: ${radiusProps};
  background-color: ${backgroundColorProps};
  color: ${colorProps};
  padding: 0 0.75rem;
  height: ${heightProps};
  cursor: pointer;
  &:hover {
    background-color: ${backgroundColorHoverProps};
  }
  &:focus {
    outline: none;
    background-color: #0a558c;
  }
`;

export const Button: FC<ButtonProps> = ({
  type = 'default',
  htmlType = 'button',
  children,
  ...props
}) => {
  const className = useClassName(props);
  return (
    <StyledButton
      type={htmlType}
      {...{ ...props, className, styledType: type }}
    >
      {children}
    </StyledButton>
  );
};

StyledButton.defaultProps = {
  theme: checkDark() ? DefaultDarkThemes : DefaultLightThemes,
};
