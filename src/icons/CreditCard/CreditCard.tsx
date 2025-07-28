import React from 'react';
import CreditCardOutline from './CreditCardOutline';
import CreditCardFilled from './CreditCardFilled';

interface CreditCardProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function CreditCard({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: CreditCardProps) {
  return filled ? (
    <CreditCardFilled size={size} color={color} />
  ) : (
    <CreditCardOutline size={size} color={color} />
  );
}

export default CreditCard;
