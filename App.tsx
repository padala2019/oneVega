/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import AppNavigator from './src/navigation';
import React from 'react';
import { MyContextProvider } from './src/Hooks/UserContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <MyContextProvider>
      <AppNavigator />
    </MyContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
