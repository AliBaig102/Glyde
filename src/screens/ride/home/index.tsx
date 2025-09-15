import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const RideHomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-glyde-white dark:bg-glyde-white-dark">
      <View className="flex-1">
        <Text className="text-2xl font-bold text-glyde-white-dark dark:text-glyde-white">
          Ride Home
        </Text>
      </View>
    </SafeAreaView>
  );
};
