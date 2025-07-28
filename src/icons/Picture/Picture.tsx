import React from 'react';
import PictureOutline from './PictureOutline';
import PictureFilled from './PictureFilled';

interface PictureProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Picture({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: PictureProps) {
  return filled ? (
    <PictureFilled size={size} color={color} />
  ) : (
    <PictureOutline size={size} color={color} />
  );
}

export default Picture;
