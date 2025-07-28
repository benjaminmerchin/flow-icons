import React from 'react';
import PuzzlePieceOutline from './PuzzlePieceOutline';
import PuzzlePieceFilled from './PuzzlePieceFilled';

interface PuzzlePieceProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function PuzzlePiece({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: PuzzlePieceProps) {
  return filled ? (
    <PuzzlePieceFilled size={size} color={color} />
  ) : (
    <PuzzlePieceOutline size={size} color={color} />
  );
}

export default PuzzlePiece;
