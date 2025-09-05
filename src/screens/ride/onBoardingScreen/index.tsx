/* eslint-disable react-native/no-inline-styles */
import { BottomText } from '@/components/BottomText';
import { GoogleButton } from '@/components/GoogleButton';
import { Button } from '@/components/ui';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';

interface Slide {
  key: string;
  title: string;
  text: string;
  image: any;
}

const slides: Slide[] = [
  {
    key: 'one',
    title: 'App where you set the price',
    text: 'Find the best offers from drivers, passengers and more',
    image: require('@/assets/images/home-screen-banner.png'),
  },
  {
    key: 'two',
    title: 'App where you set the price',
    text: 'Find the best offers from drivers, passengers and more',
    image: require('@/assets/images/onboarding-slider.png'),
  },
];

const Slide = ({ item }: { item: Slide }) => (
  <View className="items-center px-5 gap-4 mt-[3vh]">
    <Image
      source={item.image}
      className="w-[300px] h-[300px]"
      resizeMode="contain"
    />
    <Text  className="text-3xl font-bold text-center text-glyde-white-dark dark:text-glyde-white">
      {item.title}
    </Text>
    <Text className="text-lg text-center text-glyde-grey-dark dark:text-glyde-grey">
      {item.text}
    </Text>
  </View>
);

export const RideOnBoardingScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  
  return (
    <SafeAreaView className="relative flex-1 px-4 bg-glyde-white dark:bg-glyde-white-dark">
      <View className="flex-1">
        <AppIntroSlider
          renderItem={Slide}
          contentContainerStyle={{ flexGrow: 1}}
          data={slides}
          showSkipButton={false}
          showDoneButton={false}
          showNextButton={false}
          dotStyle={{ backgroundColor: colors.glydeDarkGrey }}
          activeDotStyle={{ backgroundColor: colors.glydeDarkBlue }}
        />
      </View>
      <View className="">
        <Button
          title="Continue with phone"
          onPress={() => navigation.navigate("PhoneScreen" as never)} 
          className="justify-center"
        />
        <Button
          title="Continue with email"
          onPress={() => navigation.navigate("SigninScreen" as never)}
          className="justify-center"
        />
        <GoogleButton />
        <BottomText />
      </View>
    </SafeAreaView>
  );
};
