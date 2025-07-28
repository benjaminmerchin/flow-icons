import React from 'react';
import ListItemOutline from './ListItemOutline';
import ListItemFilled from './ListItemFilled';

interface ListItemProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ListItem({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: ListItemProps) {
  return filled ? (
    <ListItemFilled size={size} color={color} />
  ) : (
    <ListItemOutline size={size} color={color} />
  );
}

export default ListItem;
