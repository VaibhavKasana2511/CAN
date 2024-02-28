import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Header from '../../Components/common/Header/Header';
import CustomButtom from '../../Components/common/customButton/CustomButtom';

const Profile = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.headingText}>My Profile</Text>
          <View style={styles.accountImage}>
            <Image source={require('../../assets/images/cameraIcon.png')} />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Name</Text>
            <TextInput style={styles.textInput} placeholder="Enter Name" />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Email</Text>
            <TextInput style={styles.textInput} placeholder="Enter Email" />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Date of Birth</Text>
            <View style={styles.passwordContainer}>
              <TextInput style={{paddingLeft: 15}} placeholder="Select Date" />
              <TouchableOpacity
                style={{justifyContent: 'center', marginRight: 15}}>
                <Image
                  source={require('../../assets/images/calendarIcon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Phone</Text>
            <TextInput style={styles.textInput} placeholder="Enter Phone" />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Organization</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Organization"
            />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>State</Text>
            <TextInput style={styles.textInput} placeholder="Select" />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>City</Text>
            <TextInput style={styles.textInput} placeholder="Enter City" />
          </View>
          <View style={styles.updateButton}>
            <CustomButtom title="Update" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
