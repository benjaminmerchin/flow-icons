import React from 'react';
import ListItemOutline from './ListItemOutline';
import ListItemFilled from './ListItemFilled';

interface ListItemProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ListItem({ 
  size = 24,
  filled = false,
  ...props
}: ListItemProps) {
  return filled ? (
    <ListItemFilled size={size} {...props} />
  ) : (
    <ListItemOutline size={size} {...props} />
  );
}

export default ListItem;
