import React from 'react';
import clsx from 'clsx';

type TextProps = {
  children: React.ReactNode;
  tag?: keyof React.JSX.IntrinsicElements;
  size?: 'sm' | 'md' | 'lg' | string;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | string;
  responsiveSize?: { [key: string]: string };   // e.g., { md: 'text-lg' }
  responsiveWeight?: { [key: string]: string }; // e.g., { md: 'font-bold' }
  color?: string; // e.g., 'text-gray-700' or 'text-[#12ED39]'
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
};

export const Text: React.FC<TextProps> = ({
  children,
  tag = 'span',
  size = 'md',
  weight = 'normal',
  responsiveSize = {},
  responsiveWeight = {},
  color = '',
  align = 'left',
  className = '',
}) => {
  const Component = tag;

  const baseSize =
    size === 'sm'
      ? 'text-[12px]'
      : size === 'lg'
      ? 'text-[48px]'
      : size === 'md'
      ? 'text-[16px]'
      : size === 'ms'
      ? 'text-[32px]'
      : size === 'ma'
      ? 'text-[24px]'
      : size;

  const baseWeight =
    weight === 'semibold'
      ? 'font-semibold'
      : weight === 'bold'
      ? 'font-bold'
      : weight === 'medium'
      ? 'font-medium'
      : 'font-normal';

  const responsiveSizeClasses = Object.entries(responsiveSize)
    .map(([key, val]) => `${key}:${val}`)
    .join(' ');

  const responsiveWeightClasses = Object.entries(responsiveWeight)
    .map(([key, val]) => `${key}:${val}`)
    .join(' ');

  const alignClass = align ? `text-${align}` : '';

  return (
    <Component
      className={clsx(
        baseSize,
        baseWeight,
        alignClass,
        color,
        responsiveSizeClasses,
        responsiveWeightClasses,
        className
      )}
    >
      {children}
    </Component>
  );
};
