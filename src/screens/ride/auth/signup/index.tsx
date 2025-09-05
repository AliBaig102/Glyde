import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, Lock, User, Phone, ChevronDown } from 'lucide-react-native';
import {
  Button,
  Input,
  GoogleButton,
  BottomText,
  CountrySelectorModal,
} from '@/components';
import { Country } from '@/constants/countries';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/hooks/useTheme';

export const SignupScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: 'United States',
    code: 'US',
    dialCode: '+1',
    flag: '🇺🇸',
  });
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignUp = () => {
    console.log('Sign Up pressed', {
      firstName,
      lastName,
      email,
      phoneNumber: selectedCountry.dialCode + phoneNumber,
      password,
    });
    navigation.navigate('EmailVerificationScreen' as never);
  };

  const handleSignInPress = () => {
    navigation.navigate('SigninScreen' as never);
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
  };

  return (
    <SafeAreaView className="flex-1 bg-glyde-white dark:bg-glyde-white-dark">
      <ScrollView
        className="flex-1"
        contentContainerClassName="flex-grow"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center px-4">
          <View className="flex-1">
            {/* Header */}
            <View className="items-center my-32">
              <Text className="mb-2 text-4xl font-bold dark:text-glyde-white text-glyde-white-dark">
                Create an Account
              </Text>
              <View className="flex-row items-center">
                <Text className="text-base text-glyde-grey-dark dark:text-glyde-grey">
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity onPress={handleSignInPress}>
                  <Text
                    onPress={handleSignInPress}
                    className="text-base font-medium underline text-glyde-blue"
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Input Fields */}
            <View className="mb-4">
              {/* First Name and Last Name Row */}
              <View className="flex-row gap-2">
                <View className="flex-1">
                  <Input
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    icon={<User size={20} color={colors.glydeDarkGrey} />}
                  />
                </View>
                <View className="flex-1">
                  <Input
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                    icon={<User size={20} color={colors.glydeDarkGrey} />}
                  />
                </View>
              </View>

              {/* Email */}
              <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                icon={<Mail size={20} color={colors.glydeDarkGrey} />}
              />

              {/* Phone Number with Country Selector */}
              <View className="flex-row items-center px-4 py-1 my-2 rounded-xl bg-glyde-light-grey dark:bg-glyde-light-grey-dark">
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  className="flex-row items-center py-3 mr-3"
                >
                  <Text className="mr-1 text-lg">{selectedCountry.flag}</Text>
                  <Text className="mr-1 text-base text-glyde-dark-grey dark:text-glyde-dark-grey-dark">
                    {selectedCountry.dialCode}
                  </Text>
                  <ChevronDown size={16} color={colors.glydeDarkGrey} />
                </TouchableOpacity>

                <View className="mr-3 w-px h-6 bg-glyde-dark-grey dark:bg-glyde-light-grey-dark" />

                <Phone size={20} color={colors.glydeDarkGrey} />

                <TextInput
                  placeholder="Mobile Number"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  keyboardType="phone-pad"
                  className="flex-1 ml-3 text-base text-black dark:text-white"
                  placeholderTextColor={colors.glydeDarkGrey}
                />
              </View>

              {/* Password */}
              <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                showPasswordToggle={true}
                icon={<Lock size={20} color={colors.glydeDarkGrey} />}
              />
            </View>
          </View>

          {/* Sign Up Button */}
          <Button
            title="Sign Up"
            onPress={handleSignUp}
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

      {/* Country Selector Modal */}
      <CountrySelectorModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onCountrySelect={handleCountrySelect}
      />
    </SafeAreaView>
  );
};
