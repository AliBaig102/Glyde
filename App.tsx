/* eslint-disable react-native/no-inline-styles */
import { StatusBar } from 'react-native';
import './global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux';
import { AppNavigator } from '@/navigation';
import { ModalPortal } from 'react-native-modals';
import { useTheme } from '@/hooks/useTheme';

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AlertNotificationRoot>
        <ModalPortal />
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
        <AppNavigator />
      </AlertNotificationRoot>
    </GestureHandlerRootView>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}

export default App;
