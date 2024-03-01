import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {IMAGES} from '@assets/images';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity>
        <Image
          source={IMAGES.drawerIcon}
          resizeMode="cover"
          style={styles.drawerIcon}
        />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={IMAGES.canLogo}
          resizeMode="cover"
          style={styles.canLogo}
        />
      </View>
    </View>
  );
};

export default Header;
