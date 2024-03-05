import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {UpcomingEvents, Category, HomePage, Chat, Portfolio} from '@screens';
import {IMAGES} from '@assets/images';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="UpcomingEvents"
        component={UpcomingEvents}
        options={{
          tabBarIcon: () => <Image source={IMAGES.calendar} />,
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: () => <Image source={IMAGES.category} />,
        }}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: () => <Image source={IMAGES.home} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: () => <Image source={IMAGES.chat} />,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: () => <Image source={IMAGES.portfolio} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
