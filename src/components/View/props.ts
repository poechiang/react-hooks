import Color from 'color';
import { PresetSize } from '../common/enums';
import { borderProps as commonBorderProps } from '../common/props';
export const ViewGapMap: Record<PresetSize, string> = {
  [PresetSize.SMALL]: '8px',
  [PresetSize.MEDIUM]: '16px',
  [PresetSize.LARGE]: '24px',
};

export const gapProps = (props: ViewProps) => {
  const gap = ViewGapMap[props?.gap as PresetSize] ?? props?.gap;
  if (!gap) {
    return 0;
  }
  return typeof gap === 'number' ? `${gap}px` : gap;
};
export const heightProps = (props: ViewProps) => {
  const height = props.height;
  if (height) {
    return typeof height === 'string' ? height : `${height}px`;
  } else {
    return ['column', 'culomn-reverse'].includes(props.flex as string)
      ? '100%'
      : 'auto';
  }
};
export const backgroundColorProps = (props: ViewProps) => {
  if (props.type === 'ghost') {
    return 'transparent';
  } else if (props.type === 'block') {
    return props.theme?.colorContainer ?? props.theme?.View?.colorContainer;
  } else if (props.type === 'code') {
    return Color(
      props.theme?.colorContainer ?? props.theme?.View?.colorContainer,
    )
      .darken(0.1)
      .hex();
  }
};
export const justifyContnetProps = (props: ViewProps) => {
  if (!props.flex) {
    return null;
  } else {
    return props.mainAlign || null;
  }
};
export const textAlignProps = (props: ViewProps) => {
  if (!props.flex) {
    return props.mainAlign || 'unset';
  } else {
    return 'unset';
  }
};
export const alignItemsProps = (props: ViewProps) => {
  if (!props.flex) {
    return 'unset';
  } else {
    return props.crossAlign || 'stretch';
  }
};

export const verticalAlignProps = (props: ViewProps) => {
  if (!props.flex) {
    return props.crossAlign;
  } else {
    return null;
  }
};

export const MarginMap: Record<PresetSize, string> = {
  [PresetSize.SMALL]: '16px',
  [PresetSize.MEDIUM]: '24px',
  [PresetSize.LARGE]: '48px',
};

const convertMarginPadding = (value: Sizable) => {
  return typeof value === 'number'
    ? `${value}px`
    : MarginMap[value as unknown as PresetSize] ?? value ?? 0;
};

const calcMarginPadding = (
  full: Sizable[],
  inline: Sizable[],
  block: Sizable[],
) => {
  // eslint-disable-next-line prefer-const
  let [inlineStart, inlineEnd] = inline;
  if (inline?.length === 1) {
    inlineEnd = inlineStart;
  }

  // eslint-disable-next-line prefer-const
  let [blockStart, blockEnd] = block;
  if (block?.length === 1) {
    blockEnd = blockStart;
  }

  let [top, right, bottom, left] = full;

  if (full?.length === 1) {
    right = top;
    bottom = top;
    left = top;
  } else if (full?.length === 2) {
    bottom = top;
    left = right;
  } else if (full?.length === 3) {
    left = right;
  }
  top = blockStart || top;
  right = inlineEnd || right;
  bottom = blockEnd || bottom;
  left = inlineStart || left;

  return `${convertMarginPadding(top!)} ${convertMarginPadding(right)} ${convertMarginPadding(bottom)} ${convertMarginPadding(left)}`;
};
export const marginProps = (props: ViewProps) => {
  const inline = (
    Array.isArray(props.marginInline)
      ? props.marginInline
      : [props.marginInline, props.marginInline]
  ) as Sizable[];
  const block = (
    Array.isArray(props.marginBlock)
      ? props.marginBlock
      : [props.marginBlock, props.marginBlock]
  ) as Sizable[];
  const margin = (
    Array.isArray(props.margin)
      ? props.margin
      : [props.margin, props.margin, props.margin, props.margin]
  ) as Sizable[];
  return calcMarginPadding(margin, inline, block);
};
export const paddingProps = (props: ViewProps) => {
  const inline = (
    Array.isArray(props.paddingInline)
      ? props.paddingInline
      : [props.paddingInline, props.paddingInline]
  ) as Sizable[];
  const block = (
    Array.isArray(props.paddingBlock)
      ? props.paddingBlock
      : [props.paddingBlock, props.paddingBlock]
  ) as Sizable[];
  const paddingPropValue =
    props.padding ?? (props.type === 'code' ? [8, 16] : null);
  const padding = (
    Array.isArray(paddingPropValue)
      ? paddingPropValue
      : [paddingPropValue, paddingPropValue, paddingPropValue, paddingPropValue]
  ) as Sizable[];

  return calcMarginPadding(padding, inline, block);
};

export const borderProps = (props: RSLayoutProps) => {
  const border = props.border ?? false;
  return commonBorderProps({ ...props, border });
};
