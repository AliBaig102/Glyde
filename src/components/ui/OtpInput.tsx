import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { OtpInput as RNOtpInput } from 'react-native-otp-entry';
import { useTheme } from '@/hooks/useTheme';

interface OtpInputProps {
  code: string;
  setCode: (code: string) => void;
  length?: number;
  className?: string;
}

export interface OtpInputRef {
  clear: () => void;
}

export const OtpInput = forwardRef<OtpInputRef, OtpInputProps>(({ setCode, length = 6 }, ref) => {
  const { colors } = useTheme();
  const otpRef = useRef<any>(null);
  
  useImperativeHandle(ref, () => ({
    clear: () => {
      setCode('');
      if (otpRef.current) {
        otpRef.current.clear();
      }
    }
  }));
  
  return (
    <RNOtpInput
      ref={otpRef}
      numberOfDigits={length}
      onTextChange={setCode}
      focusColor={colors.glydeBlue}
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
          borderColor: colors.glydeDarkGrey,
        },
        pinCodeTextStyle: {
          fontSize: 18,
          fontWeight: '600',
          textAlign: 'center',
          color: colors.glydeBlack,
        },
        focusStickStyle: {
          backgroundColor: colors.glydeBlue,
        },
        focusedPinCodeContainerStyle: {
          borderColor: colors.glydeBlue,
        },
      }}
    />
  );
});
