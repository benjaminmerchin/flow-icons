import React from 'react';

interface BoltFilledProps {
  size?: number | string;
  color?: string;
}

function BoltFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: BoltFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.4829 2.18426C14.5695 1.72241 14.3228 1.26257 13.8902 1.07923C13.4575 0.895885 12.9556 1.0385 12.684 1.42195L4.18398 13.422C3.96787 13.727 3.94001 14.1272 4.11174 14.4593C4.28348 14.7914 4.62613 15 5 15H10.7951L9.51713 21.8157C9.43053 22.2775 9.67718 22.7374 10.1098 22.9207C10.5425 23.104 11.0444 22.9614 11.316 22.578L19.816 10.578C20.0321 10.2729 20.06 9.87273 19.8883 9.54063C19.7165 9.20853 19.3739 8.99997 19 8.99997H13.2049L14.4829 2.18426Z" fill={color}/>
    </svg>
  );
}

export default BoltFilled;
