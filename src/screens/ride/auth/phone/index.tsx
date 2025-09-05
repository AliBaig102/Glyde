import { Button } from '@/components/ui';
import { CountrySelectorModal } from '@/components';
import { countries } from '@/constants/countries';
import { ArrowLeftIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/hooks/useTheme';

export const PhoneScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default country
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-glyde-white-dark">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="flex-row justify-between items-center px-6">
        <TouchableOpacity
          className="p-3"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color={colors.glydeBlack} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View className="flex-1 px-6 pt-6">
        <View className="mb-10">
          <Text className="mb-3 text-3xl font-bold text-glyde-black dark:text-glyde-white">
            Join us via phone number
          </Text>
          <Text className="text-base leading-6 text-glyde-black dark:text-glyde-white">
            We'll send you a verification code to confirm your phone number
          </Text>
        </View>

        {/* Phone Input Container */}
        <View className="mb-8">
          <View className="flex-row items-center px-4 h-16 bg-transparent rounded-2xl border-2 shadow-sm dark:bg-glyde-light-grey-dark border-glyde-blue">
            <TouchableOpacity
              className="flex-row items-center pr-4 mr-4 border-r border-glyde-grey"
              onPress={() => setModalVisible(true)}
            >
              <Text className="mr-2 text-2xl">{selectedCountry.flag}</Text>
              <Text className="mr-3 text-base font-semibold text-glyde-dark-blue dark:text-glyde-white">
                {selectedCountry.dialCode}
              </Text>
              <Text className="text-xs font-medium text-glyde-blue dark:text-glyde-white">▼</Text>
            </TouchableOpacity>
            <TextInput
              className="flex-1 text-base font-medium text-glyde-dark-blue dark:text-glyde-white"
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={15}
              placeholderTextColor={colors.glydeDarkGrey}
            />
          </View>
        </View>
      </View>

      {/* Bottom Button */}
      <Button title="Next" className="justify-center mx-4" onPress={() => {
        navigation.navigate('OtpVerificationScreen' as never);
      }} />

      {/* Country Selection Modal */}
      <CountrySelectorModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onCountrySelect={setSelectedCountry}
      />
    </SafeAreaView>
  );
};
