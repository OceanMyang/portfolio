import { cn } from "../lib/utils";
import { Container, ContainerProps } from "./container";

type TextContainerProps = {
  children?: React.ReactNode;
  outerChildren?: React.ReactNode;
  outer?: ContainerProps;
  inner?: ContainerProps;
};

export function TextContainer({
  children,
  outer = {},
  inner = {},
}: Readonly<TextContainerProps>) {
  outer.w = outer.w || "w-full";
  outer.p = outer.p || "py-6 md:py-12";
  outer.className = cn("flex justify-center", outer.className);
  inner.w = inner.w || "w-[95%] md:w-[90%] lg:w-[80%]";
  inner.p = inner.p || "px-4 py-4 md:px-8 md:py-6";
  inner.className = cn(
    "text-left rounded-2xl md:rounded-[3rem]",
    inner.className
  );
  return (
    <Container {...outer}>
      <Container {...inner}>{children}</Container>
    </Container>
  );
}
