import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import styles from './Styles';
import {AuthHeader, CustomButtom} from '@components';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';
import {IMAGES} from '@assets/images';

const Login = () => {
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <AuthHeader height={320} />
      <View style={styles.loginContainer}>
        <Text style={styles.titleLogin}>Login</Text>
        <View>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Enter Email" />
        </View>
        <View>
          <Text style={styles.inputHeading}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={{paddingLeft: verticalScale(10)}}
              placeholder="Enter Password"
            />
            <TouchableOpacity>
              <Image style={styles.eyeLogo} source={IMAGES.eyehidden} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.resetContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Become an Investor</Text>
          </TouchableOpacity>
        </View>
        <CustomButtom title="Login" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
