import {View, Text, Alert} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchStates, loginSuccess} from '../../redux/action/authAction';
import {createLanguageService} from 'typescript';

// const dispatch = useDispatch();
// const requestOptions = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({param}),
// };

export const loginUser = async (param, dispatch) => {
  console.log('LOGIN PARAM', param);
  try {
    const response = await fetch('http://54.190.192.105:9185/angel/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });
    console.log('POST request completed.');
    const data = await response.json();

    if (response.ok) {
      console.log('Response:', data);
      dispatch(loginSuccess(data));
    } else {
      console.error('Login failed:', data);
    }
  } catch (error) {
    console.error('Error during Login:', error);
  }
};

export const registerUser = async param => {
  console.log('PARAMSS>>>>', param);
  try {
    const response = await fetch('http://54.190.192.105:9185/angel/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });
    console.log('POST request completed.');

    const data = await response.json();

    if (response.ok) {
      console.log('Response:', data);
      //   Alert.alert('User Registered Successfully');
    } else {
      console.error('Registration failed:', data);
      //   Alert.alert('Registration Failed');
    }
  } catch (error) {
    console.error('Error during registration:', error);
  }
};

export const fetchStateList = async dispatch => {
  try {
    const response = await fetch(
      'http://54.190.192.105:9185/angel/get_all_state',
    );
    const data = await response.json();
    if (data && data.result && Array.isArray(data.result)) {
      dispatch(fetchStates(data));
    } else {
      console.error('Invalid state data format:', data);
    }
  } catch (error) {
    console.error('Error fetching state data:', error);
  }
};
