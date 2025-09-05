import React from 'react';
import { OtpInput as RNOtpInput } from 'react-native-otp-entry';
import { useTheme } from '@/hooks/useTheme';

interface OtpInputProps {
  code: string;
  setCode: (code: string) => void;
  length?: number;
  className?: string;
}

export const OtpInput: React.FC<OtpInputProps> = ({
  setCode,
  length = 6,
}) => {
  const { colors } = useTheme();
  
  return (
    <RNOtpInput
      numberOfDigits={length}
      onTextChange={setCode}
      focusColor={colors.primary}
      focusStickBlinkingDuration={500}
      theme={{
        containerStyle: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        pinCodeContainerStyle: {
          width: 48,
          height: 48,
          borderWidth: 2,
          borderRadius: 8,
          borderColor: colors.border,
        },
        pinCodeTextStyle: {
          fontSize: 18,
          fontWeight: '600',
          textAlign: 'center',
        },
        focusStickStyle: {
          backgroundColor: colors.primary,
        },
        focusedPinCodeContainerStyle: {
          borderColor: colors.primary,
        },
      }}
    />
  );
}