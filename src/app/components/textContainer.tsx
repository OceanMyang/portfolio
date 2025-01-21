import clsx from "clsx";
import { Container, ContainerProps } from "./container";

type TextContainerProps = {
  children?: React.ReactNode;
  outerChildren?: React.ReactNode;
  outer?: ContainerProps;
  inner?: ContainerProps;
};

export default function TextContainer({
  children,
  outer = {},
  inner = {},
}: Readonly<TextContainerProps>) {
  outer.w = outer.w || "w-full";
  outer.py = outer.py || "py-12";
  outer.className = clsx("flex justify-center", outer.className);
  inner.w = inner.w || "w-[60%]";
  inner.px = inner.px || "px-8";
  inner.py = inner.py || "py-6";
  inner.className = clsx("text-left rounded-lg shadow-lg", inner.className);
  return (
    <Container {...outer}>
      <Container {...inner}>{children}</Container>
    </Container>
  );
}
