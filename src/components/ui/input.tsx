import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  className?: string;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
}

export const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  className,
  icon,
  showPasswordToggle = false,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View
      className={`flex-row items-center bg-glyde-light-grey dark:bg-glyde-light-grey-dark rounded-xl my-2 px-4 py-1 ${
        isFocused ? 'border-2 border-glyde-blue' : 'border-2 border-transparent'
      } ${className}`}
    >
      {icon && <View className="mr-3">{icon}</View>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 text-base text-black dark:text-white"
        placeholderTextColor={colors.glydeDarkGrey}
      />
      {showPasswordToggle && (
        <TouchableOpacity onPress={togglePasswordVisibility} className="ml-3">
          {isPasswordVisible ? (
            <EyeOff size={20} color={colors.glydeDarkGrey} />
          ) : (
            <Eye size={20} color={colors.glydeDarkGrey} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};