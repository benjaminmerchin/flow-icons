import React from 'react';
import PuzzlePieceOutline from './PuzzlePieceOutline';
import PuzzlePieceFilled from './PuzzlePieceFilled';

interface PuzzlePieceProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const PuzzlePiece: React.FC<PuzzlePieceProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <PuzzlePieceFilled size={size} color={color} />
  ) : (
    <PuzzlePieceOutline size={size} color={color} />
  );
};

export default PuzzlePiece;
