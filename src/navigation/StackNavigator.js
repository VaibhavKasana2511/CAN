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
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const userState = useSelector(state => state.root.auth.user);
  console.log('NAVIGATOR', userState);
  return !userState ? (
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
  ) : (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="HaveQuestions" component={HaveQuestions} />
      <Stack.Screen name="AnsQues" component={AnsQues} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
