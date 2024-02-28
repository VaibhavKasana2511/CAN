import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/drawericon.png')}
          resizeMode="cover"
          style={styles.drawerIcon}
        />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/can-logo.png')}
          resizeMode="cover"
          style={styles.canLogo}
        />
      </View>
    </View>
  );
};

export default Header;
