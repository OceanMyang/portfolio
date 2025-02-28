import React from "react";
import { cn } from "../lib/utils";
import { Container } from "./container";

export function Grid({
  children,
  className,
  cols,
  gap,
  childrenClassName,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  gap?: string;
  cols?: string;
  childrenClassName?: string;
}>) {
  return (
    <div className={cn("grid", cols, gap, className)}>
      {React.Children.map(children, (child) => (
        <Container className={childrenClassName}>{child}</Container>
      ))}
    </div>
  );
}

export function RawGrid({
  children,
  className,
  cols,
  gap,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  gap?: string;
  cols?: string;
  childrenClassName?: string;
}>) {
  return <div className={cn("grid", cols, gap, className)}>{children}</div>;
}
