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
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar barStyle="dark-content" backgroundColor="white" />

        {/* Modal Header */}
        <View className="flex-row items-center justify-between px-6 py-5 border-b border-glyde-grey bg-very-light-grey">
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className="p-2 rounded-full bg-white shadow-sm"
          >
            <XIcon size={20} color={'#303030'} />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-glyde-dark-blue">
            Select Country
          </Text>
          <View style={{ width: 36 }} />
        </View>

        {/* Search Input */}
        <View className="px-6 py-4 bg-very-light-grey">
          <View className="flex-row items-center bg-white border border-glyde-grey rounded-2xl px-4 h-12">
            <SearchIcon size={18} color={'#A0A0A0'} />
            <TextInput
              className="flex-1 ml-3 text-base text-glyde-dark-blue"
              placeholder="Search countries..."
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#A0A0A0"
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={clearSearch} className="ml-2">
                <XIcon size={16} color={'#A0A0A0'} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Countries List */}
        <FlatList
          data={filteredCountries}
          keyExtractor={item => item.code}
          className="flex-1 bg-white"
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex-row items-center px-6 py-4 border-b border-glyde-grey/50 active:bg-glyde-light-blue/10"
              onPress={() => handleCountrySelect(item)}
            >
              <Text className="text-3xl mr-4">{item.flag}</Text>
              <View className="flex-1">
                <Text className="text-base font-medium text-glyde-dark-blue">
                  {item.name}
                </Text>
              </View>
              <Text className="text-base text-glyde-blue font-semibold">
                {item.dialCode}
              </Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => (
            <View className="h-px bg-glyde-grey/30 mx-6" />
          )}
        />
      </SafeAreaView>
    </Modal>
  );
};
