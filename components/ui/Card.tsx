import { ReactNode } from 'react';

export default function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 ${className}`}>{children}</div>;
}

