import React from 'react';
import CalendarOutline from './CalendarOutline';
import CalendarFilled from './CalendarFilled';

interface CalendarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Calendar({ 
  size = 24,
  filled = false,
  ...props
}: CalendarProps) {
  return filled ? (
    <CalendarFilled size={size} {...props} />
  ) : (
    <CalendarOutline size={size} {...props} />
  );
}

export default Calendar;
