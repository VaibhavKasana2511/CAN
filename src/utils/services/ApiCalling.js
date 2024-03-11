import {View, Text, Alert} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchStates, loginSuccess} from '../../redux/action/authAction';
import URL from './endpoints';

// const dispatch = useDispatch();
// const requestOptions = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({param}),
// };
// Assuming you have an action creator for login success

export const loginUser = async (param, dispatch, navigation) => {
  console.log('LOGIN PARAM', param);
  try {
    const response = await fetch(`${URL.BASE_URL}${URL.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });
    console.log('POST request completed.');
    const data = await response.json();

    if (response.ok) {
      if (data.status === false) {
        Alert.alert("Oops can't sign in", data.message);
      } else {
        console.log('Success', data.message, data);
        dispatch(loginSuccess(data)); // Dispatch action to update Redux store
        navigation.navigate('Home');
      }
    } else {
      // Handle non-OK response statuses
      Alert.alert('Login failed:', data.message || 'Unknown error');
    }
  } catch (error) {
    // Handle network errors or other exceptions
    Alert.alert('Error during Login:', error.message || 'Unknown error');
  }
};

// export const registerUser = async param => {
//   console.log('PARAMSS>>>>', param);
//   try {
//     const response = await fetch('http://54.190.192.105:9185/angel/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(param),
//     });
//     console.log('POST request completed.');

//     const data = await response.json();

//     if (response.ok) {
//       if (data.status === false) {
//         Alert.alert('Oops something went wrong', data.message);
//       } else {
//         Alert.alert(data.message);
//       }
//     } else {
//       console.error('Registration failed:', data);
//       //   Alert.alert('Registration Failed');
//     }
//   } catch (error) {
//     console.error('Error during registration:', error);
//   }
// };

export const registerUser = async param => {
  console.log('PARAMSS>>>>', param);
  try {
    const response = await fetch(`${URL.BASE_URL}${URL.REGISTER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });
    console.log('POST request completed.');

    const data = await response.json();

    if (response.ok) {
      if (data.status === false) {
        Alert.alert('Oops something went wrong', data.message);
        return false; // Registration failed
      } else {
        // Alert.alert(data.message);
        return true; // Registration successful
      }
    } else {
      // console.error('Registration failed:', data);
      return false; // Registration failed
    }
  } catch (error) {
    // console.error('Error during registration:', error);
    return false; // Registration failed
  }
};

export const fetchStateList = async dispatch => {
  try {
    const response = await fetch(`${URL.BASE_URL}${URL.STATE_LIST}`);
    const data = await response.json();
    if (data && data.result && Array.isArray(data.result)) {
      dispatch(fetchStates(data));
    } else {
      // console.error('Invalid state data format:', data);
    }
  } catch (error) {
    // console.error('Error fetching state data:', error);
  }
};
