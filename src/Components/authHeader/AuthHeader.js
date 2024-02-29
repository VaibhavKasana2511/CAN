import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';
import {IMAGES} from '@assets/images';

const AuthHeader = ({height}) => {
  return (
    <View
      style={{
        height: verticalScale(height),
        backgroundColor: '#0A4975',
        borderBottomLeftRadius: horizontalScale(30),
        borderBottomRightRadius: horizontalScale(30),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={IMAGES.canLogo} resizeMode="contain" />
    </View>
  );
};

export default AuthHeader;
