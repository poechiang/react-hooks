import isValidProp from '@emotion/is-prop-valid';
import { FC } from 'react';
import styled, { StyleSheetManager } from 'styled-components';

import { borderProps, radiusProps } from '../common/props';
import {
  alignItemsProps,
  gapProps,
  heightProps,
  justifyContnetProps,
  marginProps,
  paddingProps,
  textAlignProps,
} from './props';

const StyledView = styled.div<ViewProps>`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-direction: ${(props) => props.flex ?? 'none'};
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

export const View: FC<ViewProps> = (props) => (
  <StyleSheetManager shouldForwardProp={(propName) => isValidProp(propName)}>
    <StyledView {...props} />
  </StyleSheetManager>
);
