import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButtom = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#FFBD59',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        // height: 40,
        width: '100%',
        paddingVertical: 10,
        marginTop: 5,
      }}>
      <Text
        style={{color: '#000000', fontSize: 16, fontFamily: 'Nunito-SemiBold'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButtom;
