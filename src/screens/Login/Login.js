import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import styles from './Styles';
import {AuthHeader, CustomButtom} from '@components';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';
import {IMAGES} from '@assets/images';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useUserLoginMutation} from '../../redux/service/authService';
import {loginSuccess} from '../../redux/action/authAction';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(null);

  const [userLoginMutation] = useUserLoginMutation();

  const param = {email: email, password: password};

  const loginUser = async () => {
    console.log('LOGIN PARAM', param);
    try {
      const response = await userLoginMutation(param).unwrap();
      console.log('POST request completed.', response);
      if (response.status === false) {
        Alert.alert("Oops can't sign in", response.message);
      } else {
        console.log('Success', response.message, response);
        dispatch(loginSuccess(response)); // Dispatch action to update Redux store
        navigation.navigate('Home');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.log('Error==>', err);
      // Alert.alert('Error during Login:', error || 'Unknown error');
    }
  };

  const handleResetPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    loginUser();
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <AuthHeader height={320} />
      <View style={styles.loginContainer}>
        <Text style={styles.titleLogin}>Login</Text>
        <View>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View>
          <Text style={styles.inputHeading}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={{
                paddingLeft: horizontalScale(10),
                width: '90%',
              }}
              placeholder="Enter Password"
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image style={styles.eyeLogo} source={IMAGES.eyehidden} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.resetContainer}>
          <TouchableOpacity onPress={handleResetPassword}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.forgotPassword}>Become an Investor</Text>
          </TouchableOpacity>
        </View>
        <CustomButtom onPress={handleLogin} title="Login" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
