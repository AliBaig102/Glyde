import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

interface BottomTextProps {
  text?: string;
  firstLinkText?: string;
  firstLink?: string;
  secondLinkText?: string;
  secondLink?: string;
}

export const BottomText = ({
  text = 'Joining our app means your agree with our',
  firstLinkText = 'Terms of Use',
  firstLink = '',
  secondLinkText = 'Privacy Policy',
  secondLink = '',
}: BottomTextProps) => {
  const navigation = useNavigation();
  return (
    <View className="mx-2">
      <View className="flex">
        <Text className="text-center text-gray-500 text-sm font-medium">
          {text}{' '}
          <Text
            className="underline text-center text-sm font-medium"
            onPress={() => navigation.navigate(firstLink as never)}
          >
            {firstLinkText}
          </Text>{' '}
          and{' '}
        </Text>
        <Text
          className="underline text-center text-gray-500 text-sm font-medium"
          onPress={() => navigation.navigate(secondLink as never)}
        >
          {secondLinkText}
        </Text>
      </View>
    </View>
  );
};
