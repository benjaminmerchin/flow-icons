import React from 'react';
import QuoteOutline from './QuoteOutline';
import QuoteFilled from './QuoteFilled';

interface QuoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Quote({ 
  size = 24,
  filled = false,
  ...props
}: QuoteProps) {
  return filled ? (
    <QuoteFilled size={size} {...props} />
  ) : (
    <QuoteOutline size={size} {...props} />
  );
}

export default Quote;
