/* eslint-disable react-native/no-inline-styles */
import { StatusBar, useColorScheme } from 'react-native';
import './global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux';
import { AppNavigator } from '@/navigation';
import { ModalPortal } from 'react-native-modals';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AlertNotificationRoot>
            <ModalPortal/>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <AppNavigator />
          </AlertNotificationRoot>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
