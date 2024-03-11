import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import {
  AuthHeader,
  CustomButtom,
  CustomPopUp,
  registerSchema,
} from '@components';
import {horizontalScale} from '@utils/Metrics';
import {IMAGES} from '@assets/images';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser, fetchStateList} from '@utils/services/ApiCalling';
import {Formik} from 'formik';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchStateList(dispatch);
  }, [dispatch]);

  const allstate = useSelector(state => state.auth.allstates?.result ?? []);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(false);
  const [showPassword, setShowPassword] = useState(null);

  const openModal = async values => {
    try {
      const registrationSuccess = await registerUser(values);
      console.log('RESPONSE', registrationSuccess);
      if (registrationSuccess) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } catch (error) {
      // console.error('Error during registration:', error);
      setIsVisible(false);
    }
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
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            organization: '',
            state: '',
            city: '',
          }}
          onSubmit={openModal}
          validationSchema={registerSchema}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <View>
              <View>
                <Text style={styles.inputHeading}>Name</Text>
                <TextInput
                  onChangeText={handleChange('name')}
                  value={values.name}
                  style={styles.textInput}
                  placeholder="Enter Name"
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
              </View>
              <View>
                <Text style={styles.inputHeading}>Email</Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  value={values.email}
                  style={styles.textInput}
                  placeholder="Enter Email"
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View>
                <Text style={styles.inputHeading}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={{paddingLeft: horizontalScale(15), width: '90%'}}
                    placeholder="Enter Password"
                    onChangeText={handleChange('password')}
                    value={values.password}
                    secureTextEntry={showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}>
                    <Image style={styles.eyeLogo} source={IMAGES.eyehidden} />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              <View>
                <Text style={styles.inputHeading}>Organization</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Organization"
                  onChangeText={handleChange('organization')}
                  value={values.organization}
                />
                {touched.organization && errors.organization && (
                  <Text style={styles.errorText}>{errors.organization}</Text>
                )}
              </View>
              <View>
                <Text style={styles.inputHeading}>State</Text>
                <Dropdown
                  data={allstate}
                  labelField="state"
                  valueField="_id"
                  onChange={item => handleChange('state')(item.state)}
                  placeholder="Select State"
                  style={styles.dropDown}
                  value={values.state}
                />
                {touched.state && errors.state && (
                  <Text style={styles.errorText}>{errors.state}</Text>
                )}
              </View>
              <View>
                <Text style={styles.inputHeading}>City</Text>
                <TextInput
                  onChangeText={handleChange('city')}
                  value={values.city}
                  style={styles.textInput}
                  placeholder="Enter City"
                  placeholderTextColor="grey"
                />
                {touched.city && errors.city && (
                  <Text style={styles.errorText}>{errors.city}</Text>
                )}
              </View>
              <CustomButtom onPress={handleSubmit} title="Register" />
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.haveAccount}>Already have an account?</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
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
