import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '@/screens/splashScreen';
import { OnBoardingScreen } from '@/screens/onBoardingScreen';
import { RideOnBoardingScreen } from '@/screens/ride/onBoardingScreen';
import { SignupScreen } from '@/screens/ride/auth/signup';
import { SigninScreen } from '@/screens/ride/auth/signin';
import { PhoneScreen } from '@/screens/ride/auth/phone';

const Stack = createNativeStackNavigator();

const RideStack = createNativeStackNavigator();

// const RideAppPublicRoutes = () => {
//   return (
//     <>
//       <RideStack.Screen
//         name="RideOnBoardingScreen"
//         component={RideOnBoardingScreen}
//       />
//       <RideStack.Screen name="SigninScreen" component={SigninScreen} />
//       <RideStack.Screen name="SignupScreen" component={SignupScreen} />
//       <RideStack.Screen name="PhoneScreen" component={PhoneScreen} />
//     </>
//   );
// };

const RideAppRoutes = () => {
  return (
    <RideStack.Navigator
      initialRouteName="RideOnBoardingScreen"
      screenOptions={{ headerShown: false }}
    >
      <RideStack.Screen
        name="RideOnBoardingScreen"
        component={RideOnBoardingScreen}
      />
      <RideStack.Screen name="SigninScreen" component={SigninScreen} />
      <RideStack.Screen name="SignupScreen" component={SignupScreen} />
      <RideStack.Screen name="PhoneScreen" component={PhoneScreen} />
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
        <Stack.Screen name="Ride" component={RideAppRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
