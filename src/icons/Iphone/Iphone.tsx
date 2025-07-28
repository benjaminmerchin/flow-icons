import React from 'react';
import IphoneOutline from './IphoneOutline';
import IphoneFilled from './IphoneFilled';

interface IphoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Iphone({ 
  size = 24,
  filled = false,
  ...props
}: IphoneProps) {
  return filled ? (
    <IphoneFilled size={size} {...props} />
  ) : (
    <IphoneOutline size={size} {...props} />
  );
}

export default Iphone;
