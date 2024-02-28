import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const AuthHeader = ({height}) => {
  return (
    <View
      style={{
        height: height,
        backgroundColor: '#0A4975',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/images/can-logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default AuthHeader;
