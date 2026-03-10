import type { ReactNode } from 'react';

interface StatusBadgeProps {
  children: ReactNode;
  status?: 'success' | 'warning' | 'error' | 'info' | 'default';
  dot?: boolean;
  className?: string;
}

export function StatusBadge({
  children,
  status = 'default',
  dot = false,
  className = '',
}: StatusBadgeProps) {
  const statusClasses = {
    success: 'bg-green-500/10 text-green-400 border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    error: 'bg-red-500/10 text-red-400 border-red-500/20',
    info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    default: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
  };

  const dotColors = {
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    default: 'bg-zinc-500',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-full border ${statusClasses[status]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors[status]} ${status === 'success' ? 'animate-pulse' : ''}`}
        />
      )}
      {children}
    </span>
  );
}
