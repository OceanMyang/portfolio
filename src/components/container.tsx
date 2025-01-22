import { cn } from "../lib/utils";
export interface ContainerProps {
  w?: string;
  h?: string;
  bgColor?: string;
  p?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Container({
  w,
  h,
  bgColor,
  p,
  children,
  className,
}: ContainerProps) {
  return <div className={cn(w, h, bgColor, p, className)}>{children}</div>;
}
