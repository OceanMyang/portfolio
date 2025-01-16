export function Li({ children }: Readonly<{ children: React.ReactNode }>) {
  return <li className="py-1">{children}</li>;
}

export function Ol({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ol className="list-decimal list-inside">{children}</ol>;
}

export function Ul({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ul className="list-disc list-inside">{children}</ul>;
}