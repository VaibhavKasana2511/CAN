import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {verticalScale, horizontalScale, moderateScale} from '@utils/Metrics';
import {useNavigation} from '@react-navigation/native';

const CustomButtom = ({title, onPress, twoButton, onPressCancel}) => {
  const navigation = useNavigation();
  const [isAuthenticated, setIsAuthenticated] = useState(twoButton);

  const handleCancel = () => {
    navigation.goBack();
  };

  return isAuthenticated ? (
    <View style={styles.cancelContainer}>
      <TouchableOpacity onPress={onPress} style={styles.resetButton}>
        <Text style={styles.resetText}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressCancel} style={styles.cancelButton}>
        <Text style={styles.resetText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  ) : (
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
        marginTop: 20,
      }}>
      <Text
        style={{color: '#000000', fontSize: 16, fontFamily: 'Nunito-SemiBold'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButtom;

const styles = StyleSheet.create({
  cancelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 20,
    width: '45%',
  },
  cancelButton: {
    backgroundColor: '#00000040',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 20,
    width: '45%',
  },
  resetText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
});
