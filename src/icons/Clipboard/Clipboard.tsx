import React from 'react';
import ClipboardOutline from './ClipboardOutline';
import ClipboardFilled from './ClipboardFilled';

interface ClipboardProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Clipboard({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: ClipboardProps) {
  return filled ? (
    <ClipboardFilled size={size} color={color} />
  ) : (
    <ClipboardOutline size={size} color={color} />
  );
}

export default Clipboard;
