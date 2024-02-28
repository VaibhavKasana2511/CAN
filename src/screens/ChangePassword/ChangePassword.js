import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Header from '../../Components/common/Header/Header';

const ChangePassword = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.headingText}>Change Password</Text>
      </View>
    </View>
  );
};

export default ChangePassword;
