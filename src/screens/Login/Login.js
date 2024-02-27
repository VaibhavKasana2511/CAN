import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './Styles';

const Login = () => {
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../assets/images/can-logo.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.titleLogin}>Login</Text>
        <View>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Enter Email" />
        </View>
        <View>
          <Text style={styles.inputHeading}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput style={{paddingLeft: 10}} placeholder="Enter Password" />
            <TouchableOpacity>
              <Image
                style={styles.eyeLogo}
                source={require('../../assets/images/eyehidden.png')}
              />
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
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
