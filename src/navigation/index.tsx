import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import colors from '../constants/colors';
import { View } from 'react-native';
import ListWithButton from '../Tasks/ListWithButton';

const Stack = createNativeStackNavigator();

const Home = React.lazy(() => require('../screens/HomeScreen'));

/* function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.appPrimary,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
} */

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.appPrimary,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ListWithButton" component={ListWithButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
