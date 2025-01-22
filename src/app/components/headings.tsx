export function H1({ children, className = '' }: Readonly<{ children: React.ReactNode, className?: string }>) {
  return <h1 className={`text-4xl font-bold text-center pt-4 pb-8 ${className}`}>{children}</h1>;
}

export function H2({ children, className = '' }: Readonly<{ children: React.ReactNode, className?: string }>) {
  return <h2 className={`text-3xl font-bold pt-4 pb-4 ${className}`}>{children}</h2>;
}

export function H3({ children, className = '' }: Readonly<{ children: React.ReactNode, className?: string }>) {
  return <h3 className={`text-2xl font-bold ${className}`}>{children}</h3>;
}

export function H4({ children, className = '' }: Readonly<{ children: React.ReactNode, className?: string }>) {
  return <h4 className={`text-xl font-bold ${className}`}>{children}</h4>;
}