import { Button } from '@/components/ui';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { BottomText } from '@/components/BottomText';
import { useNavigation } from '@react-navigation/native';

export const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white justify-between relative px-4">
      <View className="mt-20">
        <Image
          source={require('@/assets/images/home-screen-banner.png')}
          className="w-full h-[300px] mb-6"
          resizeMode="contain"
        />
        <Button
          title="Find a Driver"
          icon={
            <Image
              source={require('@/assets/icons/car-icon.png')}
              className="w-20 h-10"
              resizeMode="contain"
            />
          }
          textClassName="text-2xl"
          variant="outline"
          onPress={() => {
            navigation.navigate('Ride' as never);
          }}
        />
        <Button
          title="Order Food"
          disabled={true}
          icon={
            <Image
              source={require('@/assets/icons/food-icon.png')}
              className="w-20 h-10"
              resizeMode="contain"
            />
          }
          textClassName="text-2xl"
          variant="outline"
          onPress={() => {}}
        />
      </View>
      <BottomText firstLink="OnBoardingScreen" secondLink="SplashScreen" />
    </SafeAreaView>
  );
};
