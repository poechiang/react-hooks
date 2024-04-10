import { useClassName } from 'r-hooks';
import { FC } from 'react';
import styled from 'styled-components';
import { borderProps, radiusProps } from '../common/props';
import { backgroundColorProps, colorProps } from './props';

const StyledButton = styled.button<ButtonProps>`
  border: ${borderProps};
  border-radius: ${radiusProps};
  background-color: ${backgroundColorProps};
  color: ${colorProps};
  padding: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: #0a558c;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #62b0e8;
    background-color: #0a558c;
  }
`;

export const Button: FC<ButtonProps> = (props) => {
  const className = useClassName(props);

  return (
    <StyledButton type="button" {...{ ...props, className }}>
      {props.children}
    </StyledButton>
  );
};
