import React from 'react';
import SettingsOutline from './SettingsOutline';
import SettingsFilled from './SettingsFilled';

interface SettingsProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Settings: React.FC<SettingsProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SettingsFilled size={size} color={color} />
  ) : (
    <SettingsOutline size={size} color={color} />
  );
};

export default Settings;
