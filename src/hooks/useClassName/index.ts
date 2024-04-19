export const useClassName = (props: { className?: string; classes?: Record<string, boolean> }) => {
  return Object.entries(props.classes || {})
    .filter(([_, value]) => !!value)
    .reduce((list, [key]) => [...list, key], (props?.className || "").split(" "))
    .join(" ");
};
