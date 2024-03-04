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
// import CustomPopUp from '../../Components/common/customPopUp/customPopUp';
import {IMAGES} from '@assets/images';
import {CustomButtom, CustomPopUp} from '@components';
import {verticalScale} from '../../utils/Metrics';

const ResetPassword = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dbButton, setdbButton] = useState(true);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={IMAGES.canLogo} />
      </View>
      <View style={styles.resetContainer}>
        <Text style={styles.resetHeading}>Reset Password</Text>
        <View>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Enter Email" />
        </View>
        <CustomButtom
          title="Reset"
          twoButton={dbButton}
          onPress={openModal}
          onPressCancel={() => navigation.goBack()}
        />
      </View>
      <CustomPopUp
        noTitle={dbButton}
        visible={isVisible}
        title="Reset Password"
        text="If that email address is in our database, we wil send you an email to reset your password."
        buttonText="Continue"
        onPress={closeModal}
      />
    </View>
  );
};

export default ResetPassword;
