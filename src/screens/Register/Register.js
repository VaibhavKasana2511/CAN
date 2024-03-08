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
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import {AuthHeader, CustomButtom, CustomPopUp} from '@components';
import {horizontalScale} from '@utils/Metrics';
import {IMAGES} from '@assets/images';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, fetchStateList} from '../../utils/services/ApiCalling';
import {State} from 'react-native-gesture-handler';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchStateList(dispatch);
  }, [dispatch]);

  const allstate = useSelector(state => state.auth.allstates?.result ?? []);

  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  param = {
    name: name,
    email: email,
    password: password,
    organization: organization,
    state: state,
    city: city,
  };

  const openModal = () => {
    setIsVisible(true);
    addUser(param);
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
          <TextInput
            onChangeText={text => setName(text)}
            value={name}
            style={styles.textInput}
            placeholder="Enter Name"
          />
        </View>
        <View>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput
            onChangeText={text => setEmail(text)}
            value={email}
            style={styles.textInput}
            placeholder="Enter Email"
          />
        </View>
        <View>
          <Text style={styles.inputHeading}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={{paddingLeft: horizontalScale(15)}}
              placeholder="Enter Password"
              onChangeText={text => setPassword(text)}
              value={password}
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
            onChangeText={text => setOrganization(text)}
            value={organization}
          />
        </View>
        <View>
          <Text style={styles.inputHeading}>State</Text>
          <Dropdown
            data={allstate}
            labelField="state"
            valueField="_id"
            onChange={item => setState(item.state)}
            placeholder="Select State"
            style={styles.dropDown}
            value={state}
          />
        </View>
        <View>
          <Text style={styles.inputHeading}>City</Text>
          <TextInput
            onChangeText={text => setCity(text)}
            value={city}
            style={styles.textInput}
            placeholder="Enter City"
            placeholderTextColor="grey"
          />
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
