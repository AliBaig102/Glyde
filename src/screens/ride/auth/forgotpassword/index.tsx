import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, ArrowLeft } from 'lucide-react-native';
import { Button, Input, BottomText } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/hooks/useTheme';

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);  
  };

  const handleSendResetLink = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      // Here you would typically call your API to send reset email
      console.log('Send Reset Link pressed', { email });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Alert.alert(
        'Reset Link Sent',
        'We have sent a password reset link to your email address. Please check your inbox.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('EmailVerificationScreen' as never)
          }
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to send reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSignIn = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-glyde-white-dark">
      <ScrollView 
        className="flex-1" 
        contentContainerClassName="flex-grow"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-4">
          
          {/* Back Button */}
          <View className="mt-4 mb-12">
            <TouchableOpacity 
              onPress={handleBackToSignIn}
              className="flex-row items-center"
            >
              <ArrowLeft size={24} color={colors.glydeBlack} />
            </TouchableOpacity>
          </View>

          <View className="flex-1">
            {/* Header */}
            <View className="items-center mb-[50%]">
              <Text className="mb-4 text-4xl font-bold text-black dark:text-glyde-white">
                Forgot Password?
              </Text>
              <Text className="px-4 text-base leading-6 text-center text-glyde-grey-dark dark:to-glyde-grey">
                Don't worry! It happens. Please enter the email address associated with your account.
              </Text>
            </View>

            {/* Email Input */}
            <View className="mb-8">
              <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                icon={
                  <Mail size={20} color={colors.glydeDarkGrey} />
                }
              />
            </View>

            {/* Send Reset Link Button */}
            <Button
              title={isLoading ? "Sending..." : "Send Reset Link"}
              onPress={handleSendResetLink}
              className="justify-center mb-6"
              disabled={isLoading || !email.trim() || !validateEmail(email)}
            />

            {/* Back to Sign In Link */}
            <View className="items-center">
              <TouchableOpacity onPress={handleBackToSignIn}>
                <Text className="text-base font-medium text-glyde-blue">
                  Remember your password? Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Text */}
          <View className="mt-auto">
            <BottomText />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};