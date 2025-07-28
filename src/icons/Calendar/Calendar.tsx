import React from 'react';
import CalendarOutline from './CalendarOutline';
import CalendarFilled from './CalendarFilled';

interface CalendarProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Calendar: React.FC<CalendarProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <CalendarFilled size={size} color={color} />
  ) : (
    <CalendarOutline size={size} color={color} />
  );
};

export default Calendar;
