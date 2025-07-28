import React from 'react';
import GameControllerOutline from './GameControllerOutline';
import GameControllerFilled from './GameControllerFilled';

interface GameControllerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function GameController({ 
  size = 24,
  filled = false,
  ...props
}: GameControllerProps) {
  return filled ? (
    <GameControllerFilled size={size} {...props} />
  ) : (
    <GameControllerOutline size={size} {...props} />
  );
}

export default GameController;
