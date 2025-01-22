import React from "react";
import clsx from "clsx";
import { Container } from "./container";

export function Grid({
  children,
  className,
  cols = "auto",
  gap = "gap-0",
  childrenClassName,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  gap?: string;
  cols?: string;
  childrenClassName?: string;
}>) {
  return (
    <div className={clsx("grid", cols, gap, className)}>
      {React.Children.map(children, (child) => (
        <Container className={childrenClassName}>{child}</Container>
      ))}
    </div>
  );
}
