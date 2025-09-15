import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '@/screens/splashScreen';
import { OnBoardingScreen } from '@/screens/onBoardingScreen';
import { RideOnBoardingScreen } from '@/screens/ride/onBoardingScreen';
import { SignupScreen } from '@/screens/ride/auth/signup';
import { SigninScreen } from '@/screens/ride/auth/signin';
import { PhoneScreen } from '@/screens/ride/auth/phone';
import { ForgotPasswordScreen } from '@/screens/ride/auth/forgotpassword';
import { EmailVerificationScreen } from '@/screens/ride/auth/EmailVerification';
import { OtpVerificationScreen } from '@/screens/ride/auth/OtpVerification';
import { ResetPasswordScreen } from '@/screens/ride/auth/ResetPassword';
import { RideHomeScreen } from '@/screens/ride/home';


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
      <RideStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <RideStack.Screen name="EmailVerificationScreen" component={EmailVerificationScreen} />
      <RideStack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
      <RideStack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <RideStack.Screen name="RideHomeScreen" component={RideHomeScreen} />
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
