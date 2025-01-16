import clsx from "clsx";
export interface ContainerProps {
  w?: string;
  h?: string;
  bgColor?: string;
  px?: string;
  py?: string;
  children?: React.ReactNode;
  classes?: string
}

export function Container({
  w,
  h,
  bgColor,
  px,
  py,
  children,
  classes
}: ContainerProps) {
  return (
    <div className={clsx(w, h, bgColor, px, py, classes)}>
      {children}
    </div>
  );
}
