import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import CustomPopUp from '../../Components/common/customPopUp/customPopUp';

const ResetPassword = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../assets/images/can-logo.png')}
        />
      </View>
      <View style={styles.resetContainer}>
        <Text style={styles.resetHeading}>Reset Password</Text>
        <View>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Enter Email" />
        </View>
        <View style={styles.cancelContainer}>
          <TouchableOpacity onPress={openModal} style={styles.resetButton}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.resetText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomPopUp
        visible={isVisible}
        title="Reset Password"
        text="If that email address is in our database, we wil send you an email to reset your password."
      />
    </View>
  );
};

export default ResetPassword;
