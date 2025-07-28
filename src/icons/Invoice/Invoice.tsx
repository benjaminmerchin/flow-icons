import React from 'react';
import InvoiceOutline from './InvoiceOutline';
import InvoiceFilled from './InvoiceFilled';

interface InvoiceProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Invoice({ 
  size = 24,
  filled = false,
  ...props
}: InvoiceProps) {
  return filled ? (
    <InvoiceFilled size={size} {...props} />
  ) : (
    <InvoiceOutline size={size} {...props} />
  );
}

export default Invoice;
