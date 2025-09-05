import React from 'react';
import { Button } from '../ui';
import { Image } from 'react-native';

export const GoogleButton = () => {
  const handleGoogleLogin = () => {
    console.log('Google Login');
  };
  return (
    <Button
      variant="outline"
      title="Continue with Google"
      onPress={handleGoogleLogin}
      className="!border-black dark:!border-white justify-center"
      icon={
        <Image
          source={require('@/assets/icons/google-icon.png')}
          className="absolute left-8 w-10 h-10"
          resizeMode="contain"
        />
      }
    />
  );
};
