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

export const PhoneScreen = () => {
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default country
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-6">
        <TouchableOpacity
          className="bg-very-light-grey p-3 rounded-full shadow-sm"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color={'#303030'} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View className="flex-1 px-6 pt-6">
        <View className="mb-10">
          <Text className="text-3xl font-bold mb-3 text-glyde-dark-blue">
            Join us via phone number
          </Text>
          <Text className="text-base text-gray-500 leading-6">
            We'll send you a verification code to confirm your phone number
          </Text>
        </View>

        {/* Phone Input Container */}
        <View className="mb-8">
          <View className="flex-row items-center border-2 border-glyde-blue rounded-2xl px-4 h-16 bg-white shadow-sm">
            <TouchableOpacity
              className="flex-row items-center pr-4 border-r border-glyde-grey mr-4"
              onPress={() => setModalVisible(true)}
            >
              <Text className="text-2xl mr-2">{selectedCountry.flag}</Text>
              <Text className="text-base font-semibold mr-3 text-glyde-dark-blue">
                {selectedCountry.dialCode}
              </Text>
              <Text className="text-xs text-glyde-blue font-medium">▼</Text>
            </TouchableOpacity>
            <TextInput
              className="flex-1 text-base text-glyde-dark-blue font-medium"
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={15}
              placeholderTextColor="#A0A0A0"
            />
          </View>
        </View>
      </View>

      {/* Bottom Button */}
      <Button title="Continue" className="justify-center" onPress={() => {}} />

      {/* Country Selection Modal */}
      <CountrySelectorModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onCountrySelect={setSelectedCountry}
      />
    </SafeAreaView>
  );
};
