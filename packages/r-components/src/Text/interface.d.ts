declare interface TextProps extends RSContainerProps {
  role?: 'text' | 'title' | 'label';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  fontSize?: string | number;
  unit?: string;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  semi?: boolean;
}
