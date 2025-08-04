import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useCallback } from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withDelay,
  runOnJS
} from 'react-native-reanimated';

export const SplashScreen = () => {
  const navigation = useNavigation();
  
  // Animation values
  const driveForwardOpacity = useSharedValue(0);
  const driveForwardTranslateY = useSharedValue(50);
  const driveForwardScale = useSharedValue(0.3);
  const logoOpacity = useSharedValue(0);
  const logoTranslateY = useSharedValue(30);

  // Navigate to next screen
  const navigateToOnboarding = useCallback(() => {
    navigation.navigate("OnBoardingScreen" as never);
  }, [navigation]);

  // Animated styles
  const driveForwardAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: driveForwardOpacity.value,
      transform: [
        { translateY: driveForwardTranslateY.value },
        { scale: driveForwardScale.value }
      ],
    };
  });

  const logoAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value,
      transform: [{ translateY: logoTranslateY.value }],
    };
  });

  useEffect(() => {
    // Start animations
    driveForwardOpacity.value = withTiming(1, { duration: 1000 });
    driveForwardTranslateY.value = withTiming(0, { duration: 1000 });
    driveForwardScale.value = withTiming(1, { duration: 1200 });

    // Animate logo with delay
    logoOpacity.value = withDelay(300, withTiming(1, { duration: 1200 }));
    logoTranslateY.value = withDelay(300, withTiming(0, { duration: 1200 }));

    // Navigate after animations complete
    const timer = setTimeout(() => {
      runOnJS(navigateToOnboarding)();
    }, 3500);

    return () => clearTimeout(timer);
  }, [driveForwardOpacity, driveForwardTranslateY, driveForwardScale, logoOpacity, logoTranslateY, navigateToOnboarding]);
  
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Animated.View style={driveForwardAnimatedStyle}>
          <Image 
            source={require("@/assets/images/drive-forward.png")} 
            className='w-[250px]' 
            resizeMode='contain' 
          />
        </Animated.View>
        
        <Animated.View style={logoAnimatedStyle} className="absolute bottom-12">
          <Image 
            source={require("@/assets/images/splash-screen-logo.png")} 
            className='w-[300px]' 
            resizeMode='contain' 
          />
        </Animated.View>
    </SafeAreaView>
  );
};
