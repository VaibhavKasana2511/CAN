import {StyleSheet, Text, View, TextInput, Image, FlatList} from 'react-native';
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
  const renderReferrals = ({item}) => (
    <View style={styles.listContainer}>
      <View style={styles.listSection}>
        <Text style={styles.listName}>{item.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.Icon}
            source={require('../../assets/images/dateIcon.png')}
          />
          <Text style={styles.listMail}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.listSection}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Image
            style={styles.mailIcon}
            source={require('../../assets/images/mailIcon.png')}
          />
          <Text style={styles.listMail}>{item.email}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Image
            style={styles.phoneIcon}
            source={require('../../assets/images/phoneIcon.png')}
          />
          <Text style={styles.listMail}>{item.phone}</Text>
        </View>
      </View>
    </View>
  );

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
        <FlatList renderItem={renderReferrals} data={data} />
      </View>
    </View>
  );
};

export default Referral;
