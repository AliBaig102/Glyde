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
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupValidation, SignupValidationType } from '@/utils/validation';
import { useApi } from '@/hooks';
import { ENDPOINT_URLS } from '@/constants/endpoint';
import { handleApiError } from '@/utils';
import { useAppDispatch } from '@/redux';
import { setEmailVerification } from '@/redux/slices/authSlice';

export const SignupScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { post } = useApi(ENDPOINT_URLS.SIGNUP, { immediate: false });
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<SignupValidationType>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
  });

  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: 'United States',
    code: 'US',
    dialCode: '+1',
    flag: '🇺🇸',
  });
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignUp = handleSubmit(async data => {
    try {
      console.log('Sign Up pressed', {
        ...data,
        phone: selectedCountry.dialCode + phoneNumber,
      });
      setValue('phone', selectedCountry.dialCode + phoneNumber);
      const { response } = await post<{ email: string }>(
        ENDPOINT_URLS.SIGNUP,
        data,
      );
      if (response.success) {
        dispatch(
          setEmailVerification({
            email: data.email,
            code: '',
          }),
        );
        navigation.navigate('EmailVerificationScreen' as never);
      }
    } catch (err: any) {
      console.log(err);
      handleApiError(err, setError);
    }
  });

  const handleSignInPress = () => {
    navigation.navigate('SigninScreen' as never);
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    // Update the phone field whenever country changes
    setValue('phone', country.dialCode + phoneNumber);
  };

  // Update phone value when phoneNumber changes
  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
    setValue('phone', selectedCountry.dialCode + value, {
      shouldValidate: true,
    });
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
                  <Controller
                    control={control}
                    name="firstName"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        placeholder="First Name"
                        value={value}
                        onChangeText={onChange}
                        icon={<User size={20} color={colors.glydeDarkGrey} />}
                        error={errors.firstName?.message}
                      />
                    )}
                  />
                </View>
                <View className="flex-1">
                  <Controller
                    control={control}
                    name="lastName"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        placeholder="Last Name"
                        value={value}
                        onChangeText={onChange}
                        icon={<User size={20} color={colors.glydeDarkGrey} />}
                        error={errors.lastName?.message}
                      />
                    )}
                  />
                </View>
              </View>

              {/* Email */}
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Email"
                    value={value}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    icon={<Mail size={20} color={colors.glydeDarkGrey} />}
                    error={errors.email?.message}
                  />
                )}
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
                  onChangeText={handlePhoneChange}
                  keyboardType="phone-pad"
                  className="flex-1 ml-3 text-base text-black dark:text-white"
                  placeholderTextColor={colors.glydeDarkGrey}
                />
              </View>
              {errors.phone && (
                <Text className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </Text>
              )}

              {/* Password */}
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Password"
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={true}
                    showPasswordToggle={true}
                    icon={<Lock size={20} color={colors.glydeDarkGrey} />}
                    error={errors.password?.message}
                  />
                )}
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
