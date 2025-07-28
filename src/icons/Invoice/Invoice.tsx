import React from 'react';
import InvoiceOutline from './InvoiceOutline';
import InvoiceFilled from './InvoiceFilled';

interface InvoiceProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Invoice: React.FC<InvoiceProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <InvoiceFilled size={size} color={color} />
  ) : (
    <InvoiceOutline size={size} color={color} />
  );
};

export default Invoice;
