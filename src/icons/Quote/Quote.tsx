import React from 'react';
import QuoteOutline from './QuoteOutline';
import QuoteFilled from './QuoteFilled';

interface QuoteProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Quote({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: QuoteProps) {
  return filled ? (
    <QuoteFilled size={size} color={color} />
  ) : (
    <QuoteOutline size={size} color={color} />
  );
}

export default Quote;
