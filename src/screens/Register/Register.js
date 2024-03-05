import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import {AuthHeader, CustomButtom, CustomPopUp} from '@components';
import {horizontalScale} from '@utils/Metrics';
import {IMAGES} from '@assets/images';

const Register = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    navigation.navigate('Login');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <AuthHeader height={246} />
      <View style={styles.registerContainer}>
        <Text style={styles.registerTitle}>Become an Investor</Text>
        <View>
          <Text style={styles.inputHeading}>Name</Text>
          <TextInput style={styles.textInput} placeholder="Enter Name" />
        </View>
        <View>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Enter Email" />
        </View>
        <View>
          <Text style={styles.inputHeading}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={{paddingLeft: horizontalScale(15)}}
              placeholder="Enter Password"
            />
            <TouchableOpacity>
              <Image style={styles.eyeLogo} source={IMAGES.eyehidden} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.inputHeading}>Organization</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Organization"
          />
        </View>
        <View>
          <Text style={styles.inputHeading}>State</Text>
          <TextInput style={styles.textInput} placeholder="State" />
        </View>
        <View>
          <Text style={styles.inputHeading}>City</Text>
          <TextInput style={styles.textInput} placeholder="Enter City" />
        </View>
        <CustomButtom onPress={openModal} title="Register" />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.haveAccount}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
      <CustomPopUp
        noTitle={title}
        visible={isVisible}
        onPress={closeModal}
        buttonText="Continue"
        text="Thanks for sharing your interest to become an investor with CAN.
              We’ll reach out to you within next 24-72 hours to assess whether
              you meet our criteria to become an investor."
      />
    </ScrollView>
  );
};

export default Register;
