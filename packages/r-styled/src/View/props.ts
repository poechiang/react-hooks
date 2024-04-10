import { PresetSize } from '../common/props';

export const ViewGapMap: Record<PresetSize, string> = {
  [PresetSize.SMALL]: '8px',
  [PresetSize.MEDIUM]: '16px',
  [PresetSize.LARGE]: '24px',
};

export const gapProps = (props: ViewProps) => {
  let gap = ViewGapMap[props?.gap as PresetSize] ?? props?.gap;
  if (!gap) {
    return 0;
  }
  return typeof gap === 'number' ? `${gap}px` : gap;
};
export const heightProps = (props: ViewProps) => {
  let height = props.height;
  if (height) {
    return typeof height === 'string' ? height : `${height}px`;
  } else {
    return ['column', 'culomn-reverse'].includes(props.flex as string)
      ? '100%'
      : 'auto';
  }
};

export const justifyContnetProps = (props: ViewProps) => {
  if (!props.flex) {
    return 'unset';
  } else {
    return props.mainAlign || 'unset';
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
    return props.crossAlign || 'unset';
  } else {
    return 'unset';
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
  let [inlineStart, inlineEnd] = inline;
  if (inline?.length === 1) {
    inlineEnd = inlineStart;
  }

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
  const padding = (
    Array.isArray(props.padding)
      ? props.padding
      : [props.padding, props.padding, props.padding, props.padding]
  ) as Sizable[];
  return calcMarginPadding(padding, inline, block);
};
