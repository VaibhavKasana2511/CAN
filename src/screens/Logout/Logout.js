import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CustomPopUp} from '@components';

const Logout = ({navigation}) => {
  const [doubleButton, setDoubleButton] = useState(true);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View styles={styles.mainContainer}>
      <CustomPopUp
        onPress={handleLogout}
        title="Logout"
        text="Are you sure you want to Logout?"
        buttonText="Logout"
        dButton={doubleButton}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
