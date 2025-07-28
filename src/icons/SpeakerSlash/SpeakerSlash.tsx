import React from 'react';
import SpeakerSlashOutline from './SpeakerSlashOutline';
import SpeakerSlashFilled from './SpeakerSlashFilled';

interface SpeakerSlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SpeakerSlash({ 
  size = 24,
  filled = false,
  ...props
}: SpeakerSlashProps) {
  return filled ? (
    <SpeakerSlashFilled size={size} {...props} />
  ) : (
    <SpeakerSlashOutline size={size} {...props} />
  );
}

export default SpeakerSlash;
