import React from 'react';
import PuzzlePieceOutline from './PuzzlePieceOutline';
import PuzzlePieceFilled from './PuzzlePieceFilled';

interface PuzzlePieceProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function PuzzlePiece({ 
  size = 24,
  filled = false,
  ...props
}: PuzzlePieceProps) {
  return filled ? (
    <PuzzlePieceFilled size={size} {...props} />
  ) : (
    <PuzzlePieceOutline size={size} {...props} />
  );
}

export default PuzzlePiece;
