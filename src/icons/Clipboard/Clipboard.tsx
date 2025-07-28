import React from 'react';
import ClipboardOutline from './ClipboardOutline';
import ClipboardFilled from './ClipboardFilled';

interface ClipboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Clipboard({ 
  size = 24,
  filled = false,
  ...props
}: ClipboardProps) {
  return filled ? (
    <ClipboardFilled size={size} {...props} />
  ) : (
    <ClipboardOutline size={size} {...props} />
  );
}

export default Clipboard;
