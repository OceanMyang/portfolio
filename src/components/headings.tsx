export function H1({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <h1
      className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-2 md:pt-4 pb-4 md:pb-8 ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <h2
      className={`text-xl md:text-2xl lg:text-3xl font-bold pt-2 md:pt-4 pb-2 md:pb-4 ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <h3 className={`text-lg md:text-xl lg:text-2xl font-bold ${className}`}>
      {children}
    </h3>
  );
}

export function H4({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <h4 className={`text-base md:text-lg lg:text-xl font-bold ${className}`}>
      {children}
    </h4>
  );
}
