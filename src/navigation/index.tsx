import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '@/screens/splashScreen';
import { OnBoardingScreen } from '@/screens/onBoardingScreen';
import { RideOnBoardingScreen } from '@/screens/ride/onBoardingScreen';

const Stack = createNativeStackNavigator();

const RideStack = createNativeStackNavigator();

const RidePublicScreen = () => {
  return (
    <RideStack.Navigator
      initialRouteName="RideOnBoardingScreen"
      screenOptions={{ headerShown: false }}
    >
      <RideStack.Screen
        name="RideOnBoardingScreen"
        component={RideOnBoardingScreen}
      />
    </RideStack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="Ride" component={RidePublicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
