import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Header from '../../Components/common/Header/Header';
import CustomButtom from '../../Components/common/customButton/CustomButtom';

const ChangePassword = () => {
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.headingText}>Change Password</Text>
        <View style={styles.updateButton}>
          <Text style={styles.inputHeading}>Current Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your current password"
          />
        </View>
        <View style={styles.allTextInput}>
          <Text style={styles.inputHeading}>Confirm Current Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter current password again"
          />
        </View>
        <View style={styles.allTextInput}>
          <Text style={styles.inputHeading}>New Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter new password"
          />
        </View>
        <View style={styles.updateButton}>
          <CustomButtom title="Update" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
