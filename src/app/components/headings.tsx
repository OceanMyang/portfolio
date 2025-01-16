export function H1({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h1 className="text-4xl font-bold text-center pt-4 pb-8">{children}</h1>;
}

export function H2 ({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h2 className="text-3xl font-bold pt-4 pb-4">{children}</h2>;
}

export function H3 ({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h3 className="text-2xl font-bold">{children}</h3>;
}

export function H4 ({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h4 className="text-xl font-bold">{children}</h4>;
}