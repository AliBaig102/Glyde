import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  title,
  icon,
  onPress,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`flex flex-row items-center justify-center gap-4 bg-blue-500 p-4 m-2 rounded-md ${className} ${disabled ? 'opacity-50' : ''}`}
    >
      {icon && icon}
      <Text className="text-white">{title}</Text>
    </TouchableOpacity>
  );
};
