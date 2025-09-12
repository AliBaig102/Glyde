import { useColorScheme } from 'nativewind';
import { colors, ColorScheme } from '@/constants/colors';

export const useTheme = (): {
  isDark: boolean;
  colors: ColorScheme;
  toggleTheme: () => void;
  colorScheme: 'light' | 'dark';
} => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleToggleTheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };
  
  return {
    isDark,
    colors: isDark ? colors.dark : colors.light,
    toggleTheme: handleToggleTheme,
    colorScheme: colorScheme as 'light' | 'dark',
  };
};