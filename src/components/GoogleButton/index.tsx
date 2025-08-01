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
      className="border-black justify-center"
      icon={
        <Image
          source={require('@/assets/icons/google-icon.png')}
          className="w-10 h-10 absolute left-8"
          resizeMode="contain"
        />
      }
    />
  );
};
