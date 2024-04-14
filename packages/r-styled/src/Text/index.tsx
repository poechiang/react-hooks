import { useClassName } from 'r-hooks';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DefaultDarkThemes, DefaultLightThemes } from '../ScopeProvider/tokens';
import { checkDark } from '../common';
import { colorProps, fontSizeProps, textAlignProps } from './props';

const StyledText = styled.span<TextProps>`
  color: ${colorProps};
  font-size: ${fontSizeProps};
  text-align: ${textAlignProps};
  margin-block-start: ${(props) => (props.role === 'title' ? 0 : null)};
`;

export const Text: FC<TextProps> = ({
  children,
  role,
  level,
  prefix,
  suffix,
  unit,
  semi,
  ...props
}) => {
  const className = useClassName(props);
  const [roleDom, setRoleDom] = useState<string>('span');
  useEffect(() => {
    let dom = { text: 'span', label: 'label', title: 'h' }[role ?? 'text'];
    if (role === 'title') {
      dom += level ?? 4;
    }
    setRoleDom(dom);
  }, [role, level]);
  return (
    <StyledText as={roleDom} {...{ ...props, role, className }}>
      {prefix ?? null}
      {children}
      {suffix ?? null}
      {unit ? <small>{unit}</small> : null}
      {role === 'label' && semi !== false ? ': ' : null}
    </StyledText>
  );
};

StyledText.defaultProps = {
  theme: checkDark() ? DefaultDarkThemes : DefaultLightThemes,
};
