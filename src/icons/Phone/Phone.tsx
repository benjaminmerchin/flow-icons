import React from 'react';
import PhoneOutline from './PhoneOutline';
import PhoneFilled from './PhoneFilled';

interface PhoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Phone({ 
  size = 24,
  filled = false,
  ...props
}: PhoneProps) {
  return filled ? (
    <PhoneFilled size={size} {...props} />
  ) : (
    <PhoneOutline size={size} {...props} />
  );
}

export default Phone;
