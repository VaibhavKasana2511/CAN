import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {IMAGES} from '@assets/images';
import {verticalScale, horizontalScale, moderateScale} from '@utils/Metrics';
import {CustomPopUp} from '@components';

const drawerItems = [
  {name: 'Profile', icon: IMAGES.profile, label: 'Profile'},
  {name: 'Referral', icon: IMAGES.referral, label: 'Referral'},
  {
    name: 'ChangePassword',
    icon: IMAGES.changepassword,
    label: 'Change Password',
  },
  {name: 'Logout', icon: IMAGES.logout, label: 'Logout'},
];

const CustomDrawerContent = ({navigation}) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [button, setbutton] = useState(true);

  const handleCloseDrawer = () => {
    navigation.closeDrawer();
  };

  const handleLogout = () => {
    console.log('papa');
    setShowLogoutModal(false);
    navigation.navigate('Login');
  };

  const handleCancel = () => {
    setShowLogoutModal(false);
  };

  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  const handleLogoutPress = () => {
    setShowLogoutModal(true);
    closeDrawer();
  };

  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.drawerHeader}>
            <Image
              source={IMAGES.canLogo}
              resizeMode="cover"
              style={styles.img}
            />
          </View>
          <TouchableHighlight
            onPress={handleCloseDrawer}
            underlayColor={false}
            style={{
              marginTop: verticalScale(10),
              right: horizontalScale(12),
              position: 'absolute',
            }}>
            <Image source={IMAGES.cross} />
          </TouchableHighlight>
        </View>

        <View style={styles.drawerContent}>
          {drawerItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.drawerItem}
              onPress={() => {
                if (item.label === 'Logout') {
                  handleLogoutPress();
                } else {
                  navigation.navigate(item.name);
                }
              }}>
              <View style={styles.imgContainer}>
                <Image
                  source={item.icon}
                  style={{
                    height: moderateScale(20),
                    width: moderateScale(20),
                    marginLeft: horizontalScale(5),
                    marginTop: verticalScale(1),
                  }}
                />
                <Text style={styles.drawerItemText}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>
      <CustomPopUp
        title="Logout"
        text="Are you sure you want to Logout?"
        buttonText="Logout"
        onPress={handleLogout}
        doublebutton={true}
        visible={showLogoutModal}
        onPressCancel={handleCancel}
        noTitle={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  headerContainer: {
    flexDirection: 'row',
  },

  drawerHeader: {
    marginTop: -moderateScale(5),
    height: moderateScale(100),
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(10, 73, 117, 1)',
  },

  img: {
    height: moderateScale(83),
    width: moderateScale(197),
    alignSelf: 'center',
  },

  drawerContent: {
    margin: moderateScale(10),
  },

  drawerItem: {
    width: '100%',
    height: moderateScale(40),
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(10),
  },

  imgContainer: {
    flexDirection: 'row',
  },

  drawerItemText: {
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Regular',
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: moderateScale(10),
  },
});

export default CustomDrawerContent;
