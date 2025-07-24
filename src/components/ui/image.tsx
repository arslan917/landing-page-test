'use client';

import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type CustomProps = {
  rounded?: boolean;
  shadow?: boolean;
  bordered?: boolean;
  className?: string;
};

type ImageProps = NextImageProps & CustomProps;

const Image: React.FC<ImageProps> = ({
  alt,
  rounded = false,
  shadow = false,
  bordered = false,
  className = '',
  ...props
}) => {
  const classes = `
    ${rounded ? 'rounded-lg' : ''}
    ${shadow ? 'shadow-md' : ''}
    ${bordered ? 'border border-gray-200' : ''}
    ${className}
  `;

  return <NextImage alt={alt} className={classes.trim()} {...props} />;
};

export { Image };
