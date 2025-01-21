import clsx from "clsx";
export interface ContainerProps {
  w?: string;
  h?: string;
  bgColor?: string;
  px?: string;
  py?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Container({
  w,
  h,
  bgColor,
  px,
  py,
  children,
  className,
}: ContainerProps) {
  return (
    <div className={clsx(w, h, bgColor, px, py, className)}>{children}</div>
  );
}
