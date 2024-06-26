import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import {Header, CustomButtom, CustomPopUp} from '@components';
import {useSelector} from 'react-redux';
import {useUpdatePasswordMutation} from '../../redux/service/authService';
import LoadingScreen from '../../components/common/loader/LoadingScreen';

const ChangePassword = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPass, setCurrentPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [newPass, setNewPass] = useState();
  const [updatePasswordMutation, isLoading] = useUpdatePasswordMutation();

  const userData = useSelector(state => state.root.auth.user.result);
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
      if (data.data.status) {
        setIsVisible(true);
      } else {
        Alert.alert(data.data.message);
      }
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  const openModal = () => {
    // setIsVisible(true);
    setCurrentPass('');
    setNewPass('');
    setConfirmPass('');
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
            value={currentPass}
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
            value={confirmPass}
            onChangeText={text => setConfirmPass(text)}
          />
        </View>
        <View style={styles.allTextInput}>
          <Text style={styles.inputHeading}>New Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter new password"
            onChangeText={text => setNewPass(text)}
            value={newPass}
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
      <Modal
        transparent={true}
        animationType="fade"
        visible={isLoading.isLoading}>
        <LoadingScreen />
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
