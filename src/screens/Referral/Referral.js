import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Header from '../../Components/common/Header/Header';
import CustomButtom from '../../Components/common/customButton/CustomButtom';

const data = [
  {
    name: 'Rajesh T',
    email: 'rajesh@gmail.com',
    date: '7/10/22',
    phone: '987987456',
  },
  {
    name: 'Mahesh K',
    email: 'mahesh@gmail.com',
    date: '12/10/22',
    phone: '985632147',
  },
];

const Referral = () => {
  const renderReferrals = () => <View></View>;

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.headingText}>
          Refer someone whom you think can be part of CAN
        </Text>
        <View style={styles.updateButton}>
          <Text style={styles.inputHeading}>Name</Text>
          <TextInput style={styles.textInput} placeholder="Enter Name" />
        </View>
        <View style={styles.allTextInput}>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Enter Email" />
        </View>
        <View style={styles.allTextInput}>
          <Text style={styles.inputHeading}>Phone</Text>
          <TextInput style={styles.textInput} placeholder="Enter Phone" />
        </View>
        <View style={styles.updateButton}>
          <CustomButtom title="Submit" />
        </View>
        <Text style={styles.headingText}>My Referrals</Text>
      </View>
    </View>
  );
};

export default Referral;
