import React from 'react';
import QuestionMarkOutline from './QuestionMarkOutline';
import QuestionMarkFilled from './QuestionMarkFilled';

interface QuestionMarkProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function QuestionMark({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: QuestionMarkProps) {
  return filled ? (
    <QuestionMarkFilled size={size} color={color} />
  ) : (
    <QuestionMarkOutline size={size} color={color} />
  );
}

export default QuestionMark;
