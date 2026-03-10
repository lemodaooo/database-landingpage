import type { ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
}

export function CodeBlock({ children, className = '' }: CodeBlockProps) {
  return (
    <div
      className={`bg-[#0d0d0d] rounded-lg border border-dark-border overflow-hidden ${className}`}
    >
      {/* Window controls */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-dark-border">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>
      {/* Code content */}
      <div className="p-3 font-mono text-xs leading-relaxed">{children}</div>
    </div>
  );
}

interface CodeKeywordProps {
  children: ReactNode;
  type?: 'keyword' | 'string' | 'number' | 'comment' | 'function' | 'operator';
}

export function CodeToken({ children, type = 'keyword' }: CodeKeywordProps) {
  const colorClasses = {
    keyword: 'text-purple-400',
    string: 'text-green-400',
    number: 'text-orange-400',
    comment: 'text-gray-500',
    function: 'text-blue-400',
    operator: 'text-cyan-400',
    default: 'text-zinc-300',
  };

  return (
    <span className={colorClasses[type] || colorClasses.default}>
      {children}
    </span>
  );
}
