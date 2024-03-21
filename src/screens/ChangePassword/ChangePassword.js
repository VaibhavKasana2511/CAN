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
import {useSelector} from 'react-redux';
import {useUpdatePasswordMutation} from '../../redux/service/authService';

const ChangePassword = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPass, setCurrentPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [newPass, setNewPass] = useState();
  const [updatePasswordMutation] = useUpdatePasswordMutation();

  const userData = useSelector(state => state.auth.user.result);
  console.log('DATA===>', userData);

  let params = {
    _id: userData._id,
    current_password: currentPass,
    new_password: newPass,
  };

  const handleUpdatePassword = async () => {
    console.log('PARAMS', params);
    try {
      const data = await updatePasswordMutation(params);
      console.log('RES', data);
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  const openModal = () => {
    setIsVisible(true);
    handleUpdatePassword();
  };

  const closeModal = () => {
    setIsVisible(false);
    navigation.goBack();
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
            onChangeText={text => setCurrentPass(text)}
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
            onChangeText={text => setNewPass(text)}
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
