import React from 'react';
import CreditCardOutline from './CreditCardOutline';
import CreditCardFilled from './CreditCardFilled';

interface CreditCardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function CreditCard({ 
  size = 24,
  filled = false,
  ...props
}: CreditCardProps) {
  return filled ? (
    <CreditCardFilled size={size} {...props} />
  ) : (
    <CreditCardOutline size={size} {...props} />
  );
}

export default CreditCard;
