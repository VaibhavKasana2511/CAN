import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from '@components';
import TabNavigator from './TabNavigator';

import {Referral, Logout, Profile, ChangePassword} from '@screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // initialRouteName="HomeTab"
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) => (
        <CustomDrawerContent navigation={navigation} />
      )}>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Referral" component={Referral} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
