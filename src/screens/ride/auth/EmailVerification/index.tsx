import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { Button } from '@/components';
import { OtpInput } from '@/components/ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/hooks/useTheme';





export const EmailVerificationScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const email = 'user@example.com';

  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    if (isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(interval);
            setIsResendDisabled(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isResendDisabled]);

  const handleResendCode = () => {
    console.log('Resend Code pressed');
    setTimer(30);
    setIsResendDisabled(true);
    // Add API call to resend verification code
  };

  const handleVerify = async () => {
    try {
      setIsLoading(true);
      console.log('Verify pressed', { code });
      // Add verification logic here
      // For now, we'll simulate a successful verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.navigate('ResetPasswordScreen' as never);
    } catch (error) {
      console.error('Verification failed:', error);
      // Add error handling
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-glyde-white dark:bg-glyde-white-dark">
      <ScrollView 
        className="flex-1" 
        contentContainerClassName="flex-grow"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-6">
          {/* Header with Back Button */}
          <View className="flex-row items-center mt-4 mb-8">
            <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
              <ArrowLeft size={24} color={colors.glydeBlack} />
            </TouchableOpacity>
          </View>

          {/* Title and Description */}
          <View className="mb-8">
            <Text className="mb-2 text-2xl font-bold text-glyde-white-dark dark:text-glyde-white">
              Email Verification
            </Text>
            <Text className="mb-8 text-glyde-grey-dark dark:text-glyde-grey">
              We've sent a verification code to {email}. Please enter the code below to verify your account.
            </Text>
          </View>

          {/* OTP Input */}
          <OtpInput code={code} setCode={setCode} />
        </View>

        {/* Bottom Buttons */}
        <View className="px-4 pb-8">
          <Button
            title={isLoading ? "Verifying..." : "Verify"}
            onPress={handleVerify}
            className="justify-center mb-4"
            disabled={code.length !== 6 || isLoading}
          />

          <Button
            title={isResendDisabled ? `Resend OTP (${timer}s)` : "Resend OTP"}
            onPress={handleResendCode}
            variant="outline"
            className="justify-center"
            disabled={isResendDisabled}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};