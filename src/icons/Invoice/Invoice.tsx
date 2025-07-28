import React from 'react';
import InvoiceOutline from './InvoiceOutline';
import InvoiceFilled from './InvoiceFilled';

interface InvoiceProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Invoice({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: InvoiceProps) {
  return filled ? (
    <InvoiceFilled size={size} color={color} />
  ) : (
    <InvoiceOutline size={size} color={color} />
  );
}

export default Invoice;
