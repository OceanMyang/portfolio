import { Container, ContainerProps } from "./container";

type TextContainerProps = {
  children?: React.ReactNode;
  outer?: ContainerProps;
  inner?: ContainerProps;
};

export default function TextContainer({
  children,
  outer,
  inner,
}: Readonly<TextContainerProps>) {
  if (!outer)
    outer = {
      w: "w-full",
      py: "py-12",
      bgColor: "bg-2",
    };
  outer.classes = "flex justify-center";
  if (!inner)
    inner = {
      w: "w-[60%]",
      px: "px-12",
      py: "py-8",
      bgColor: "bg-1",
    };
  inner.classes = "text-left rounded-lg shadow-lg";
  return (
    <Container {...outer}>
      <Container {...inner}>{children}</Container>
    </Container>
  );
}
