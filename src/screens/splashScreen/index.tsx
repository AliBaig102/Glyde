import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(()=>navigation.navigate("OnBoardingScreen" as never),5000)
  }, [navigation]);
  
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Image source={require("@/assets/images/drive-forward.png")} className='w-[300px]' resizeMode='contain' />
        <Image source={require("@/assets/images/splash-screen-logo.png")} className='w-[300px] absolute bottom-12' resizeMode='contain' />
    </SafeAreaView>
  );
};
