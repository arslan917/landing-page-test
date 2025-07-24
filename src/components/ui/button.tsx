import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'md' | 'lg' | 'icon';
  icon?: LucideIcon;
  iconClasses?: string;
  iconPosition?: 'left' | 'right';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  iconClasses='',
  ...props
}) => {
  const variantClass: Record<
    NonNullable<ButtonProps['variant']>,
    string
  > = {
    default: 'bg-[#12ED39] hover:bg-[#10d732] text-[#1E1E1E]',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-gray-300 bg-white text-gray-800 hover:bg-gray-100',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-800',
    link: 'bg-transparent text-blue-600 underline hover:text-blue-800',
  };

  const sizeClass: Record<NonNullable<ButtonProps['size']>, string> = {
    default: 'font-semibold text-[16px] py-[7.86px] px-[31.46px] rounded-full min-h-[47.18px] min-w-[109.91px]',
    md: 'px-4 py-2 pr-8 fw-600 fs-16',
    sm: 'h-8 px-3 text-sm',
    lg: 'font-semibold text-[14px] py-[7.86px] px-[31.46px] rounded-full w-[213px] h-[54px]',
    icon: 'w-9 h-9 p-0 flex items-center justify-center',
  };

  const baseClasses = 'flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  return (
    <button
      className={cn(
        baseClasses,
        variantClass[variant],
        sizeClass[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={iconClasses} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={iconClasses} />}
    </button>
  );
};

export { Button };
