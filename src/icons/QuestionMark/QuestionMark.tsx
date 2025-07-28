import React from 'react';
import QuestionMarkOutline from './QuestionMarkOutline';
import QuestionMarkFilled from './QuestionMarkFilled';

interface QuestionMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function QuestionMark({ 
  size = 24,
  filled = false,
  ...props
}: QuestionMarkProps) {
  return filled ? (
    <QuestionMarkFilled size={size} {...props} />
  ) : (
    <QuestionMarkOutline size={size} {...props} />
  );
}

export default QuestionMark;
