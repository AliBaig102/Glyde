import { countries, Country } from '@/constants/countries';
import { XIcon, SearchIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface CountrySelectorModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onCountrySelect: (country: Country) => void;
}

export const CountrySelectorModal: React.FC<CountrySelectorModalProps> = ({
  modalVisible,
  setModalVisible,
  onCountrySelect,
}) => {
  const [searchText, setSearchText] = useState('');
  const { colors } = useTheme();

  const filteredCountries = countries.filter(
    country =>
      country.name.toLowerCase().includes(searchText.toLowerCase()) ||
      country.dialCode.includes(searchText),
  );

  const handleCountrySelect = (country: Country) => {
    onCountrySelect(country);
    setModalVisible(false);
    setSearchText('');
  };

  const clearSearch = () => {
    setSearchText('');
  };

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={false}
      onRequestClose={() => setModalVisible(false)}
    >
      <SafeAreaView className="flex-1 bg-glyde-white dark:bg-glyde-white-dark">
        <StatusBar barStyle="dark-content" backgroundColor={colors.glydeWhite} />

        {/* Modal Header */}
        <View className="flex-row justify-between items-center px-6 py-5 border-b border-glyde-grey bg-very-light-grey">
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className="p-2 rounded-full"
          >
            <XIcon size={20} color={colors.glydeBlue} />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-glyde-blue">
            Select Country
          </Text>
          <View style={{ width: 36 }} />
        </View>

        {/* Search Input */}
        <View className="px-6 py-4 bg-very-light-grey">
          <View className="flex-row items-center px-4 h-12 bg-transparent rounded-2xl border border-glyde-grey-dark">
            <SearchIcon size={18} color={colors.glydeDarkGrey} />
            <TextInput
              className="flex-1 ml-3 text-base text-black dark:text-white"
              placeholder="Search countries..."
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor={colors.glydeDarkGrey}
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={clearSearch} className="ml-2">
                <XIcon size={16} color={colors.glydeDarkGrey} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Countries List */}
        <FlatList
          data={filteredCountries}
          keyExtractor={item => item.code}
          className="flex-1 bg-very-light-grey"
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex-row items-center px-6 py-4 border-b border-glyde-grey/50 active:bg-glyde-light-blue/10"
              onPress={() => handleCountrySelect(item)}
            >
              <Text className="mr-4 text-3xl">{item.flag}</Text>
              <View className="flex-1">
                <Text className="text-base font-medium text-black dark:text-white">
                  {item.name}
                </Text>
              </View>
              <Text className="text-base font-semibold text-black dark:text-white">
                {item.dialCode}
              </Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </Modal>
  );
};
