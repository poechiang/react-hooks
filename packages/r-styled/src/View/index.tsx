import isValidProp from '@emotion/is-prop-valid';
import { FC } from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import { Text } from '../Text';
import { radiusProps } from '../common/props';
import {
  alignItemsProps,
  backgroundColorProps,
  borderProps,
  gapProps,
  heightProps,
  justifyContnetProps,
  marginProps,
  paddingProps,
  textAlignProps,
} from './props';

const StyledView = styled.div<ViewProps>`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  background-color: ${backgroundColorProps};
  flex-direction: ${(props) => props.flex ?? null};
  justify-content: ${justifyContnetProps};
  text-align: ${textAlignProps};
  align-items: ${alignItemsProps};
  flex-wrap: ${(props) =>
    !props.flex ? 'unset' : props.wrap ? 'wrap' : 'nowrap'};
  gap: ${gapProps};
  height: ${heightProps};
  border-radius: ${radiusProps};
  color: ${(props) => props.color ?? 'inherit'};
  border: ${borderProps};
  margin: ${marginProps};
  padding: ${paddingProps};
`;

export const View: FC<ViewProps> = ({
  children,
  title,
  titleLevel,
  ...props
}) => (
  <StyleSheetManager shouldForwardProp={(propName) => isValidProp(propName)}>
    <StyledView {...props}>
      {title ? (
        <Text role="title" level={titleLevel}>
          {title}
        </Text>
      ) : null}
      {props.type === 'code' ? (
        <pre>
          <code className={props.lang ? `language-${props.lang}` : ''}>
            {children}
          </code>
        </pre>
      ) : (
        children
      )}
    </StyledView>
  </StyleSheetManager>
);
