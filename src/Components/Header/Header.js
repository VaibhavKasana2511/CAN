import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/tabicon.png')}
          resizeMode="cover"
          style={{height: 15, width: 30, marginLeft: 20, marginTop: 25}}
        />
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/can-logo.png')}
          resizeMode="cover"
          style={{height: 60, width: 130, marginRight: 30}}
        />
      </View>
    </View>
  );
};

export default Header;
