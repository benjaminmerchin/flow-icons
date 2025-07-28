import React from 'react';
import SettingsOutline from './SettingsOutline';
import SettingsFilled from './SettingsFilled';

interface SettingsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Settings({ 
  size = 24,
  filled = false,
  ...props
}: SettingsProps) {
  return filled ? (
    <SettingsFilled size={size} {...props} />
  ) : (
    <SettingsOutline size={size} {...props} />
  );
}

export default Settings;
