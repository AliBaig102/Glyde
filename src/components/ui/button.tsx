import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'secondary';
}

export const Button = ({
  title,
  icon,
  onPress,
  disabled,
  className,
  variant = 'default',
  textClassName,
}: ButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outline':
        return 'border border-glyde-grey bg-transparent';
      case 'ghost':
        return 'bg-transparent hover:bg-glyde-blue';
      case 'link':
        return 'bg-transparent underline';
      case 'secondary':
        return 'bg-glyde-grey';
      default:
        return 'bg-glyde-blue';
    }
  };

  const textColor =
    variant === 'outline' || variant === 'ghost' || variant === 'link'
      ? 'text-glyde-dark-grey'
      : 'text-glyde-white';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`flex flex-row items-center gap-4 p-4 m-2 rounded-xl ${getVariantClasses()}  ${disabled ? 'opacity-50' : ''} ${className}`}
    >
      {icon && icon}
      <Text className={`text-2xl ${textColor} ${textClassName}`}>{title}</Text>
    </TouchableOpacity>
  );
};
