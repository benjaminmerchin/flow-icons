import React from 'react';
import CalendarOutline from './CalendarOutline';
import CalendarFilled from './CalendarFilled';

interface CalendarProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Calendar({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: CalendarProps) {
  return filled ? (
    <CalendarFilled size={size} color={color} />
  ) : (
    <CalendarOutline size={size} color={color} />
  );
}

export default Calendar;
