import {
  Image,
  KeyboardAvoidingView,
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
import {loginUser} from '@utils/services/ApiCalling';
import {useDispatch, useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(null);

  const param = {email: email, password: password};

  const handleResetPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    loginUser(param, dispatch, navigation);
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
