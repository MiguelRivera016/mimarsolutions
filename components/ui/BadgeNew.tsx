'use client';
import { motion } from 'framer-motion';

export type BadgeVariant = 'new' | 'hot' | 'beta';

type Props = {
  variant: BadgeVariant;
  children?: string;
  className?: string;
};

const STYLES: Record<
  BadgeVariant,
  { label: string; className: string; dotClassName: string }
> = {
  new: {
    label: 'NEW',
    className: 'bg-green-50 text-green-700 ring-green-200',
    dotClassName: 'bg-green-500',
  },
  hot: {
    label: 'HOT',
    className: 'bg-orange-50 text-orange-700 ring-orange-200',
    dotClassName: 'bg-orange-500',
  },
  beta: {
    label: 'BETA',
    className: 'bg-blue-50 text-blue-700 ring-blue-200',
    dotClassName: 'bg-blue-500',
  },
};

export default function BadgeNew({ variant, children, className }: Props) {
  const s = STYLES[variant];
  const text = children ?? s.label;

  return (
    <motion.span
      className={
        'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ring-1 ' +
        s.className +
        (className ? ` ${className}` : '')
      }
      aria-label={`Etiqueta: ${text}`}
      animate={{ opacity: [0.92, 1, 0.92] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className={'inline-block size-1.5 rounded-full ' + s.dotClassName} aria-hidden="true" />
      <span>{text}</span>
    </motion.span>
  );
}

