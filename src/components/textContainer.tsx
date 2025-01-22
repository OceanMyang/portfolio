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
  outer.p = outer.p || "py-12";
  outer.className = cn("flex justify-center", outer.className);
  inner.w = inner.w || "w-[60%]";
  inner.p = inner.p || "px-8 py-6";
  inner.className = cn("text-left rounded-lg", inner.className);
  return (
    <Container {...outer}>
      <Container {...inner}>{children}</Container>
    </Container>
  );
}
