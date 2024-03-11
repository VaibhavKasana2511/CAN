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
import {useState} from 'react';
import {loginUser} from '../../utils/services/ApiCalling';
import {useDispatch, useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.auth.user);
  console.log('LOGINNNN', userState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const param = {email: email, password: password};

  const handleResetPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    loginUser(param, dispatch);
    navigation.navigate('Home');
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
              style={{paddingLeft: verticalScale(10)}}
              placeholder="Enter Password"
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <TouchableOpacity>
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
