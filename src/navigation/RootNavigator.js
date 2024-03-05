import React from 'react';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './StackNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  // const isAuthenticated = true;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
