import React from 'react';
import ClipboardOutline from './ClipboardOutline';
import ClipboardFilled from './ClipboardFilled';

interface ClipboardProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Clipboard: React.FC<ClipboardProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ClipboardFilled size={size} color={color} />
  ) : (
    <ClipboardOutline size={size} color={color} />
  );
};

export default Clipboard;
