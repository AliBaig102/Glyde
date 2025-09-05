import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lock, ArrowLeft } from 'lucide-react-native';
import { Button, Input, BottomText } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/hooks/useTheme';

export const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (password: string) => {
    // Password should be at least 8 characters with at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleResetPassword = async () => {
    if (!password.trim()) {
      Alert.alert('Error', 'Please enter a new password');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password',
        'Password must be at least 8 characters long and contain at least one letter and one number'
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Reset Password pressed', { password, confirmPassword });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Alert.alert(
        'Password Reset Successful',
        'Your password has been reset successfully. You can now sign in with your new password.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('SignIn' as never)
          }
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSignIn = () => {
    navigation.navigate('SignIn' as never);
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
          <View className="mt-4 mb-8">
            <TouchableOpacity 
              onPress={handleBackToSignIn}
              className="flex-row items-center"
            >
              <ArrowLeft size={24} color={colors.glydeBlack} />
            </TouchableOpacity>
          </View>

          <View className="flex-1 justify-center">
            {/* Header */}
            <View className="items-center mb-12">
              <Text className="mb-4 text-4xl font-bold text-black dark:text-glyde-white">
                Reset Password
              </Text>
              <Text className="px-4 text-base leading-6 text-center text-gray-600 dark:text-glyde-grey">
                Please enter your new password.
              </Text>
            </View>

            {/* Password Inputs */}
            <View className="mb-8">
              <Input
                placeholder="New Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                showPasswordToggle={true}
                icon={
                  <Lock size={20} color={colors.glydeDarkGrey} />
                }
              />
              <View className="mt-4">
                <Input
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={true}
                  showPasswordToggle={true}
                  icon={
                    <Lock size={20} color={colors.glydeDarkGrey} />
                  }
                />
              </View>
              
              {/* Password Requirements */}
              {password.length > 0 && (
                <View className="mt-2">
                  <Text className={`text-sm ${
                    validatePassword(password) ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'
                  }`}>
                    Password must be at least 8 characters with one letter and one number
                  </Text>
                </View>
              )}
              
              {/* Password Match Indicator */}
              {confirmPassword.length > 0 && (
                <View className="mt-1">
                  <Text className={`text-sm ${
                    password === confirmPassword ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'
                  }`}>
                    {password === confirmPassword ? 'Passwords match' : 'Passwords do not match'}
                  </Text>
                </View>
              )}
            </View>

            {/* Reset Password Button */}
            <Button
              title={isLoading ? "Resetting..." : "Reset Password"}
              onPress={handleResetPassword}
              className="justify-center mb-6"
              disabled={
                isLoading || 
                !password.trim() || 
                !confirmPassword.trim() || 
                !validatePassword(password) || 
                password !== confirmPassword
              }
            />
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