import React from 'react';
import GameControllerOutline from './GameControllerOutline';
import GameControllerFilled from './GameControllerFilled';

interface GameControllerProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function GameController({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: GameControllerProps) {
  return filled ? (
    <GameControllerFilled size={size} color={color} />
  ) : (
    <GameControllerOutline size={size} color={color} />
  );
}

export default GameController;
