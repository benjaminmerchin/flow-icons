import React from 'react';
import ListItemOutline from './ListItemOutline';
import ListItemFilled from './ListItemFilled';

interface ListItemProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ListItemFilled size={size} color={color} />
  ) : (
    <ListItemOutline size={size} color={color} />
  );
};

export default ListItem;
