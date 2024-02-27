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
      <Modal
        transparent={true}
        animationType="fade"
        visible={isVisible}
        onRequestClose={() => {}}>
        <View style={styles.modalContainer}>
          <View style={styles.modalSubContainer}>
            <Text style={styles.resetHeading}>Reset Password</Text>
            <Text style={styles.modalText}>
              If that email address is in our database, we will send you an
              email to reset your password.
            </Text>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.modalContinueButton}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ResetPassword;
