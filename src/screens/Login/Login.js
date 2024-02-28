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
// import AuthHeader from '../../Components/authHeader/AuthHeader';
import AuthHeader from '../../Components/authHeader/AuthHeader';
import CustomButtom from '../../Components/common/customButton/CustomButtom';

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
        <CustomButtom title="Login" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
