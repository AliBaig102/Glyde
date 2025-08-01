import { Button } from '@/components/ui';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const OnBoardingScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text>On Boarding</Text>
      <Button title="Next" onPress={() => {}}  />
    </SafeAreaView>
  );
};
