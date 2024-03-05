import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import {
  ResetPassword,
  Login,
  Register,
  Details,
  HaveQuestions,
  AnsQues,
  IntroSlider,
} from '@screens';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="IntroSlider"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="IntroSlider" component={IntroSlider} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="HaveQuestions" component={HaveQuestions} />
      <Stack.Screen name="AnsQues" component={AnsQues} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
