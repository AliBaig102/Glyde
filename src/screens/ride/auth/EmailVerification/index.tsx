import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { Button } from '@/components';
import { OtpInput } from '@/components/ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/redux';
import { useApi } from '@/hooks';
import { ENDPOINT_URLS } from '@/constants/endpoint';
import { IUser } from '@/types/models';
import { login } from '@/redux/slices/authSlice';

export const EmailVerificationScreen = () => {
  const navigation = useNavigation();
  const {
    emailVerification: { email },
  } = useAppSelector(state => state.auth);
  const { post,isMutating } = useApi(ENDPOINT_URLS.VERIFY_EMAIL, { immediate: false });
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    if (isResendDisabled) {
      interval = setInterval(() => {
        setTimer(prevTimer => {
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

  const otpInputRef = useRef<any>(null);

  const handleResendCode = async () => {
    try{
      // Clear OTP code using ref
      otpInputRef.current?.clear();
      setTimer(30);
      setIsResendDisabled(true);
      // Add API call to resend verification code
       await post<{
        email: string;
      }>(ENDPOINT_URLS.RESEND_VERIFY_EMAIL, { email });
    }catch(error){
      console.log('Resend failed:', error);
    }
  };

  const handleVerify = async () => {
    try {
      if (code.length !== 6) {
        console.log('Invalid OTP length');
        return;
      }
      
      const { response, data } = await post<{
        user: IUser;
        accessToken: string;
        refreshToken: string;
      }>(ENDPOINT_URLS.VERIFY_EMAIL, { email, otp:code });
      
      if (response.success) {
        dispatch(
          login({
            user: data.user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          }),
        );
      } else {
        // Handle unsuccessful response
        console.log('Verification unsuccessful:', response);
        // Could add user feedback here
      }
    } catch (error) {
      console.log('Verification failed:', error);
      // Could add user feedback here
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
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="mr-4"
            >
              <ArrowLeft size={24} color={colors.glydeBlack} />
            </TouchableOpacity>
          </View>

          {/* Title and Description */}
          <View className="mb-8">
            <Text className="mb-2 text-2xl font-bold text-glyde-white-dark dark:text-glyde-white">
              Email Verification
            </Text>
            <Text className="mb-8 text-glyde-grey-dark dark:text-glyde-grey">
              We've sent a verification code to {email}. Please enter the code
              below to verify your account.
            </Text>
          </View>

          {/* OTP Input */}
          <OtpInput ref={otpInputRef} code={code} setCode={setCode} />
        </View>

        {/* Bottom Buttons */}
        <View className="px-4 pb-8">
          <Button
            title={isMutating ? 'Verifying...' : 'Verify'}
            onPress={handleVerify}
            className="justify-center mb-4"
            disabled={code.length !== 6 || isMutating}
          />

          <Button
            title={isResendDisabled ? `Resend OTP (${timer}s)` : 'Resend OTP'}
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
