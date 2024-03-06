import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {IMAGES} from '@assets/images';
import {useNavigation} from '@react-navigation/native';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';

const Header = ({image = true, text = false, drawer = true, back = false}) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={drawer ? openDrawer : goBack}>
        {drawer && (
          <Image
            source={IMAGES.drawerIcon}
            resizeMode="cover"
            style={styles.drawerIcon}
          />
        )}
        {back && (
          <Image
            source={IMAGES.back}
            style={{
              height: moderateScale(20),
              width: moderateScale(30),
              marginLeft: horizontalScale(20),
              marginTop: verticalScale(20),
            }}
          />
        )}
      </TouchableOpacity>
      {image && (
        <View style={styles.logoContainer}>
          <Image
            source={IMAGES.canLogo}
            resizeMode="cover"
            style={styles.canLogo}
          />
        </View>
      )}
      {text && (
        <View style={styles.txtContainer}>
          <Text style={styles.headerTxt}>{text}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
