import React from 'react';
import PictureOutline from './PictureOutline';
import PictureFilled from './PictureFilled';

interface PictureProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Picture({ 
  size = 24,
  filled = false,
  ...props
}: PictureProps) {
  return filled ? (
    <PictureFilled size={size} {...props} />
  ) : (
    <PictureOutline size={size} {...props} />
  );
}

export default Picture;
