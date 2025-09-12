import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, Lock } from 'lucide-react-native';
import { Button, Input, GoogleButton, BottomText } from '@/components';
import { useNavigation } from '@react-navigation/native';

export const SigninScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign In pressed', { email, password });
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen' as never);
  };

  const handleSignUp = () => {
    navigation.navigate('SignupScreen' as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        className="flex-1" 
        contentContainerClassName="flex-grow"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center px-4">
          <View className="flex-1">

          {/* Header */}
          <View className="items-center my-32">
            <Text className="mb-2 text-4xl font-bold text-black">
              Welcome Back
            </Text>
            <View className="flex-row items-center">
              <Text className="text-base text-gray-600">
                Don't have an account?{' '}
              </Text>
              <Text onPress={handleSignUp} className="text-base font-medium underline text-glyde-blue">
                Sign Up
              </Text>
            </View>
          </View>

          {/* Input Fields */}
          <View className="mb-4">
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              icon={
                <Mail size={20} color="#9CA3AF" />
              }
            />
            
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              showPasswordToggle={true}
              icon={
                <Lock size={20} color="#9CA3AF" />
              }
            />
          </View>

          {/* Forgot Password */}
          <View className="items-end mb-8">
            <Text 
              className="text-base font-medium text-glyde-blue"
              onPress={handleForgotPassword}
            >
              Forgot Password?
            </Text>
          </View>
          </View>

          {/* Sign In Button */}
          <Button
            title="Sign In"
            onPress={handleSignIn}
            className="justify-center"
          />

          {/* Google Button */}
          <GoogleButton />
        </View>

        {/* Bottom Text */}
        <View className="mt-auto">
          <BottomText />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
