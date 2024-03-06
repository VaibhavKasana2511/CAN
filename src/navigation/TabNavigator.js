import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, StyleSheet} from 'react-native';
import {UpcomingEvents, Category, HomePage, Chat, Portfolio} from '@screens';
import {IMAGES} from '@assets/images';
import {NavigationContainer} from '@react-navigation/native';
import {moderateScale} from '@utils/Metrics';

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
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={IMAGES.calendar} />
            ) : (
              <View style={styles.focusedIcon}>
                <Image source={IMAGES.whitecalendar} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={IMAGES.category} />
            ) : (
              <View style={styles.focusedIcon}>
                <Image source={IMAGES.whitecategory} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={IMAGES.home} />
            ) : (
              <View style={styles.focusedIcon}>
                <Image source={IMAGES.whitehome} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={IMAGES.chat} />
            ) : (
              <View style={styles.focusedIcon}>
                <Image source={IMAGES.whitechat} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={IMAGES.portfolio} />
            ) : (
              <View style={styles.focusedIcon}>
                <Image source={IMAGES.whiteportfolio} />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  focusedIcon: {
    backgroundColor: '#0A4975',
    height: moderateScale(45),
    width: moderateScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(50),
  },
});
