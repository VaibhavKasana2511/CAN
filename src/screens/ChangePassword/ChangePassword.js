import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import {Header, CustomButtom, CustomPopUp} from '@components';

const ChangePassword = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <Header drawer={false} back={true} />
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
          <CustomButtom title="Update" onPress={openModal} />
        </View>
      </View>
      <CustomPopUp
        visible={isVisible}
        onPress={closeModal}
        buttonText="Continue"
        text="Your password has been updated. You will now be redirected to the login screen"
      />
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
