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
        return 'bg-transparent border border-glyde-grey dark:border-glyde-grey-dark';
      case 'ghost':
        return 'bg-transparent hover:bg-glyde-blue dark:hover:bg-glyde-blue-dark';
      case 'link':
        return 'bg-transparent';
      case 'secondary':
        return 'bg-glyde-grey dark:bg-glyde-grey-dark';
      default:
        return 'bg-glyde-blue dark:bg-glyde-blue-dark';
    }
  };

  const getTextClasses = () => {
    if (variant === 'outline' || variant === 'ghost' || variant === 'link') {
      return 'text-black dark:text-white';
    }
    if (variant === 'secondary') {
      return 'text-glyde-dark-grey dark:text-glyde-white';
    }
    return 'text-white dark:text-white';
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`flex flex-row items-center gap-4 p-4 m-2 rounded-xl ${getVariantClasses()} ${disabled ? 'opacity-50' : ''} ${className || ''}`}
    >
      {icon && icon}
      <Text 
        className={`text-lg ${getTextClasses()} ${variant === 'link' ? 'underline' : ''} ${textClassName || ''}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
