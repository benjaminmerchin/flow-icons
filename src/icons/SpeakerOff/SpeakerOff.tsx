import React from 'react';
import SpeakerOffOutline from './SpeakerOffOutline';
import SpeakerOffFilled from './SpeakerOffFilled';

interface SpeakerOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SpeakerOff({ 
  size = 24,
  filled = false,
  ...props
}: SpeakerOffProps) {
  return filled ? (
    <SpeakerOffFilled size={size} {...props} />
  ) : (
    <SpeakerOffOutline size={size} {...props} />
  );
}

export default SpeakerOff;
