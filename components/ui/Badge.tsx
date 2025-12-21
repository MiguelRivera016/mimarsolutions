import { ReactNode } from 'react';

export default function Badge({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>
      {children}
    </span>
  );
}

