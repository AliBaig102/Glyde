import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, ArrowLeft } from 'lucide-react-native';
import { Button, Input, BottomText } from '@/components';
import { useNavigation } from '@react-navigation/native';

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleSendResetLink = () => {
    console.log('Send Reset Link pressed', { email });
    // Here you would typically call your API to send reset email
  };

  const handleBackToSignIn = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        className="flex-1" 
        contentContainerClassName="flex-grow"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-4">
          
          {/* Back Button */}
          <View className="mt-4 mb-8">
            <TouchableOpacity 
              onPress={handleBackToSignIn}
              className="flex-row items-center"
            >
              <ArrowLeft size={24} color="#1E40AF" />
              <Text className="ml-2 text-base font-medium text-glyde-blue">
                Back to Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-1 justify-center">
            {/* Header */}
            <View className="items-center mb-12">
              <Text className="mb-4 text-4xl font-bold text-black">
                Forgot Password?
              </Text>
              <Text className="text-base text-gray-600 text-center leading-6 px-4">
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
                  <Mail size={20} color="#9CA3AF" />
                }
              />
            </View>

            {/* Send Reset Link Button */}
            <Button
              title="Send Reset Link"
              onPress={handleSendResetLink}
              className="justify-center mb-6"
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