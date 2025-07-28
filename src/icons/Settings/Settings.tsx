import React from 'react';
import SettingsOutline from './SettingsOutline';
import SettingsFilled from './SettingsFilled';

interface SettingsProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Settings({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SettingsProps) {
  return filled ? (
    <SettingsFilled size={size} color={color} />
  ) : (
    <SettingsOutline size={size} color={color} />
  );
}

export default Settings;
