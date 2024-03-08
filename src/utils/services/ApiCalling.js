import {View, Text, Alert} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchStates} from '../../redux/action/authAction';

// const dispatch = useDispatch();
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({param}),
};

export const addUser = async param => {
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
